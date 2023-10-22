import React, { useRef } from 'react';
import { Image, Animated } from 'react-native';

const useSpriteSheet = ({
  spriteSheetImage,
  glowingSpriteSheetImage = null,
  totalWidth,
  totalHeight,
  frameWidth,
  frameHeight,
  defaultColor = '#000',
  numberOfFrames,
}) => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const rotateValue = useRef(new Animated.Value(0)).current;

  const renderFrame = ({
    index,
    tintColor,
    percentage = 1,
    showGlow = false,
    applyScaling = false,
    applyRotation = false,
    scaleDuration = 1000,
    rotateDuration = 5000,
    canFlipHorizontal = false,
    top = 0,
    left = 0,
    zIndex = top
  }) => {
    const scaledFrameWidth = frameWidth * percentage;
    const scaledFrameHeight = frameHeight * percentage;

    const x = (index % (totalWidth / frameWidth)) * frameWidth;
    const y = Math.floor(index / (totalWidth / frameWidth)) * frameHeight;

    const shouldFlipHorizontal = canFlipHorizontal && Math.random() < 0.5;

    const animatedStyle =(applyScaling || applyRotation) &&{
      transform: [
        { scale: applyScaling && scaleValue || 1 },
        {
          rotate: rotateValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
          }),
        },
      ],
    };

    if (applyScaling) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleValue, {
            toValue: 1.2,
            duration: scaleDuration,
            useNativeDriver: true,
          }),
          Animated.timing(scaleValue, {
            toValue: 1,
            duration: scaleDuration,
            useNativeDriver: true,
          }),
          Animated.timing(scaleValue, {
            toValue: 0.8,
            duration: scaleDuration,
            useNativeDriver: true,
          }),
          Animated.timing(scaleValue, {
            toValue: 1,
            duration: scaleDuration,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }

    if (applyRotation) {
      rotateValue.setValue(0); // Reset the rotation value
      Animated.loop(
        Animated.timing(rotateValue, {
          toValue: 1,
          duration: rotateDuration,
          useNativeDriver: true,
        })
      ).start();
    }
    //[{ transform: [{ scale: 0.5 }]
    return (
      <Animated.View style={[{ position: "absolute", top: top - frameHeight, left:left, zIndex: zIndex, width: scaledFrameWidth, height: scaledFrameHeight, overflow: 'hidden' }, animatedStyle]}>
        {showGlow && glowingSpriteSheetImage && (
          <Image
            source={glowingSpriteSheetImage}
            style={{
              width: totalWidth * percentage,
              height: totalHeight * percentage,
              transform: [
                { translateX: -x * percentage },
                { translateY: -y * percentage },
                { scaleX: shouldFlipHorizontal ? -1 : 1 },
              ],
            }}
          />
        )}
        <Image
          source={spriteSheetImage}
          style={{
            position: glowingSpriteSheetImage && showGlow ? 'absolute' : 'relative',
            width: totalWidth * percentage,
            height: totalHeight * percentage,
            transform: [
              { translateX: -x * percentage },
              { translateY: -y * percentage },
              { scaleX: shouldFlipHorizontal ? -1 : 1 },
            ],
            ...(tintColor ? { tintColor: tintColor } : {}),
          }}
        />
      </Animated.View>
    );
  };

  const renderRandomFrame = (props) => {
    const index = Math.floor(Math.random() * numberOfFrames);
    return renderFrame({ ...props, index });
  };

  return { renderFrame, renderRandomFrame };
};

export default useSpriteSheet;
