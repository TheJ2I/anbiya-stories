import React, { PropsWithChildren, useRef } from 'react';
import { View, StyleSheet } from 'react-native';

// This type now represents the absolute screen layout
type AbsoluteLayout = { pageX: number; pageY: number; width: number; height: number };

type DropZoneProps = PropsWithChildren & {
  title: string;
  // The onMeasure prop is now simpler
  onMeasure: (layout: AbsoluteLayout) => void;
};

export function DropZone({ children, title, onMeasure }: DropZoneProps) {
  const selfRef = useRef<View>(null);

  const handleLayout = () => {
    // onLayout guarantees this view is on the screen.
    // We use a small timeout to ensure the entire UI is settled before measuring.
    setTimeout(() => {
      if (selfRef.current) {
        selfRef.current.measure((x, y, width, height, pageX, pageY) => {
          // Push the absolute screen coordinates up to the parent component.
          onMeasure({ pageX, pageY, width, height });
        });
      }
    }, 50); // A 50ms delay adds an extra layer of stability
  };

  return (
    // The ref and onLayout trigger the measurement for this specific component
    <View style={styles.container} ref={selfRef} onLayout={handleLayout}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 75,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 15,
    borderStyle: 'dashed',
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});