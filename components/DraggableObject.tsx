import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type DraggableObjectProps = PropsWithChildren & {
  initialPosition?: { x: number; y: number };
};

export function DraggableObject({ children, initialPosition = { x: 0, y: 0 } }: DraggableObjectProps) {
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({ x: initialPosition.x, y: initialPosition.y });

  const pan = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate((event) => {
      offset.value = {
        x: initialPosition.x + event.translationX,
        y: initialPosition.y + event.translationY,
      };
    })
    .onEnd(() => {
      isPressed.value = false;
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
      <Animated.View style={animatedStyles}>
        {children}
      </Animated.View>
    </GestureDetector>
  );
}