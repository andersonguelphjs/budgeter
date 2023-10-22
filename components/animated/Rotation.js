import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

const Rotation = ({ children, speed = 1, direction = 'clockwise', duration = 1000 }) => {
  const [rotationAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    let toValue;

    if (direction === 'clockwise') {
      toValue = 1;
    } else if (direction === 'counterclockwise') {
      toValue = -1;
    }

    const animation = Animated.loop(
      Animated.timing(rotationAnimation, {
        toValue,
        duration,
        useNativeDriver: true,
      }),
      { iterations: 'infinite' }
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, []);

  const rotateStyle = {
    transform: [
      {
        rotate: rotationAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', `${360 * speed}deg`],
        }),
      },
    ],
  };

  return (
    <Animated.View style={rotateStyle}>
      {children}
    </Animated.View>
  );
};

export default Rotation;
