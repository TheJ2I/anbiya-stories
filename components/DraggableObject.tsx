import React, { PropsWithChildren } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type DraggableObjectProps = PropsWithChildren & {
  id: string;
  type: 'sun' | 'moon' | 'planets';
  initialPosition?: { x: number; y: number };
  dropZones: Record<string, { x: number; y: number; width: number; height: number }>;
  onDrop: (itemType: string) => void;
  // The isDropped prop is no longer needed
  width: number;
  height: number;
};

export function DraggableObject({
  children,
  type,
  initialPosition = { x: 0, y: 0 },
  dropZones,
  onDrop,
  width,
  height,
}: DraggableObjectProps) {
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({ x: initialPosition.x, y: initialPosition.y });
  const start = useSharedValue({ x: initialPosition.x, y: initialPosition.y });

  const pan = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate((event) => {
      offset.value = {
        x: start.value.x + event.translationX,
        y: start.value.y + event.translationY,
      };
    })
    .onEnd(() => {
      isPressed.value = false;

      let droppedInCorrectZone = false;
      const dropZone = dropZones[type];

      if (dropZone && dropZone.width > 0) {
        const objectCenterX = offset.value.x + width / 2;
        const objectCenterY = offset.value.y + height / 2;

        if (
          objectCenterX >= dropZone.x &&
          objectCenterX <= dropZone.x + dropZone.width &&
          objectCenterY >= dropZone.y &&
          objectCenterY <= dropZone.y + dropZone.height
        ) {
          droppedInCorrectZone = true;
          // On success, just notify the parent.
          // The parent will handle unmounting this component.
          runOnJS(onDrop)(type);
        }
      }

      if (!droppedInCorrectZone) {
        // If not dropped correctly, spring back to the start.
        offset.value = withSpring(initialPosition);
        start.value = initialPosition;
      }
    });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
        { scale: withSpring(isPressed.value ? 1.2 : 1) },
      ],
      zIndex: isPressed.value ? 10 : 1,
    };
  });

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={animatedStyles}>{children}</Animated.View>
    </GestureDetector>
  );
}