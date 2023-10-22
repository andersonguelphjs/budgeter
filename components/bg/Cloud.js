import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Cloud = () => {
  const randomValue = (min, max) => Math.random() * (max - min) + min;

  const cloudPath = `
    M${randomValue(25, 35)} ${randomValue(15, 25)}
    C${randomValue(20, 30)} ${randomValue(15, 25)} ${randomValue(15, 25)} ${randomValue(30, 35)} ${randomValue(30, 40)} ${randomValue(30, 40)}
    C${randomValue(35, 45)} ${randomValue(30, 40)} ${randomValue(35, 45)} ${randomValue(20, 30)} ${randomValue(30, 40)} ${randomValue(15, 25)}
    Z
  `;

  // Generate random values for cloud size, position, and opacity
  const size = Math.floor(randomValue(100, 150));
  const opacity = randomValue(0.6, 1);

  return (
    <View style={{ position: 'absolute', opacity }}>
      <Svg width={size} height={size} viewBox="0 0 40 40">
        <Path d={cloudPath} fill="white" />
      </Svg>
    </View>
  );
};

export default Cloud;
