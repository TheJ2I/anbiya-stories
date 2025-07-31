// components/DropZone.tsx

import React, { PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';

export function DropZone({ children }: PropsWithChildren) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
});