import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withRepeat, withTiming } from 'react-native-reanimated';

export default function SpriteSheetScrollAnimation({
  frameWidth,
  frameHeight,
  totalFrames,
  duration,
  imagePath,
}) {
  const spriteAnimation = useSharedValue(0);

  spriteAnimation.value = withRepeat(
    withTiming(totalFrames - 1, {
      duration: duration * (totalFrames - 1), // Multiply the duration by the number of frames
      easing: Easing.linear,
    }),
    -1,
    false
  );

  const animatedStyle = useAnimatedStyle(() => {
    const left = -(spriteAnimation.value % Math.sqrt(totalFrames)) * frameWidth;
    const top = -Math.floor(spriteAnimation.value / Math.sqrt(totalFrames)) * frameHeight;

    return {
      transform: [{ translateX: left }, { translateY: top }],
    };
  });

  return (
    <View style={{ width: frameWidth, height: frameHeight, overflow: 'hidden' }}>
      <Animated.Image
        source={imagePath}
        style={[
          {
            width: frameWidth * Math.sqrt(totalFrames),
            height: frameHeight * Math.sqrt(totalFrames),
          },
          animatedStyle,
        ]}
        resizeMode="cover"
      />
    </View>
  );
}
