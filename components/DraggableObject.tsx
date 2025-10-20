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
        // --- START OF THE NEW, MORE FORGIVING LOGIC ---

        // Get the boundaries of the draggable object
        const objectLeft = offset.value.x;
        const objectRight = offset.value.x + width;
        const objectTop = offset.value.y;
        const objectBottom = offset.value.y + height;

        // Get the boundaries of the drop zone
        const zoneLeft = dropZone.x;
        const zoneRight = dropZone.x + dropZone.width;
        const zoneTop = dropZone.y;
        const zoneBottom = dropZone.y + dropZone.height;

        // Check if the two rectangles overlap at all
        if (
          objectLeft < zoneRight &&
          objectRight > zoneLeft &&
          objectTop < zoneBottom &&
          objectBottom > zoneTop
        ) {
          droppedInCorrectZone = true;
          runOnJS(onDrop)(type);
        }
        // --- END OF THE NEW LOGIC ---
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