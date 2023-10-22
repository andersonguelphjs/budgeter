import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const RandomizedScene = ({
  skyGradientColors,
  groundGradientColors,
  gradientDirection,
  skyComponents,
  groundComponents,
  randomPercentage = 50
}) => {
  // Generate a random percentage between 25% and 100%

  const skyHeight = `${randomPercentage}%`;
  const groundHeight = `${100 - randomPercentage}%`;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    sky: {
      flex: randomPercentage,
    },
    ground: {
      flex: 100 - randomPercentage,
    },
  });
  return (
    <View style={styles.container}>
      {/* Sky */}
      <LinearGradient
        colors={skyGradientColors}
        start={[0.5, gradientDirection === 'top-to-bottom' ? 0 : 1]}
        end={[0.5, gradientDirection === 'top-to-bottom' ? 1 : 0]}
        style={styles.sky}
      >
        {skyComponents.map((component, index) => (
          // Render the sky components with random positioning and zIndex
          // You can use absolute positioning here to control the layout
          // based on your requirements
          <View key={index}>{component}</View>
        ))}
      </LinearGradient>

      {/* Ground */}
      <LinearGradient
        colors={groundGradientColors}
        start={[0.5, gradientDirection === 'top-to-bottom' ? 0 : 1]}
        end={[0.5, gradientDirection === 'top-to-bottom' ? 1 : 0]}
        style={styles.ground}
      >
        {groundComponents.map((component, index) => (
          // Render the ground components with random positioning and zIndex
          // You can use absolute positioning here to control the layout
          // based on your requirements
          <View key={index}>{component}</View>
        ))}
      </LinearGradient>
    </View>
  );
};



export default RandomizedScene;
