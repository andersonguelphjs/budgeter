import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const ProgressIndicator = ({ percent, size = 'large', color = '#000000', style }) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={size} color={color} />
      <View style={[styles.progress, { width: `${percent}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progress: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    backgroundColor: '#0000FF', // Change this color to customize the progress bar color
  },
});

export default ProgressIndicator;
