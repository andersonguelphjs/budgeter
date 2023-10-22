import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

export default function SpriteSheetAnimation({
  frameWidth,
  frameHeight,
  totalFrames,
  duration,
  imagePath,
  totalWidth, // Total width of the sprite sheet
  totalHeight, // Total height of the sprite sheet
}) {
  const currentFrame = useSharedValue(0);
  const framesPerRow = Math.floor(totalWidth / frameWidth);

  useEffect(() => {
    const intervalId = setInterval(() => {
      currentFrame.value = (currentFrame.value + 1) % totalFrames;
    }, duration);

    return () => clearInterval(intervalId);
  }, [currentFrame, totalFrames, duration]);

  const animatedStyle = useAnimatedStyle(() => {
    const frameIndex = currentFrame.value;
    const left = -(frameIndex % framesPerRow) * frameWidth;
    const top = -Math.floor(frameIndex / framesPerRow) * frameHeight;

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
            width: totalWidth, // Using the totalWidth prop
            height: totalHeight, // Using the totalHeight prop
          },
          animatedStyle,
        ]}
        resizeMode="cover"
      />
    </View>
  );
}
