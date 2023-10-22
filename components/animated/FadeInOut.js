import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

const FadeInOut = ({ children, fadeInAction, fadeOutAction, isVisible }) => {
  const [fadeAnimation] = useState(new Animated.Value(isVisible ? 1 : 0));

  useEffect(() => {
    if (isVisible) {
      fadeInAction();
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    } else {
      fadeOutAction();
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  return (
    <>
      <Animated.View style={{ opacity: fadeAnimation }}>
        {children}
      </Animated.View>
    </>
  );
};

export default FadeInOut;
