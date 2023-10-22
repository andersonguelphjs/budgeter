import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const OverlayedImage = ({
  children,
  backgroundImageSource,
  overlayOpacity = 0.6,
  gradientColors = ['#4c669f', '#3b5998', '#192f6a']
}) => {
  return (
    <LinearGradient colors={gradientColors} style={styles.container}>
      <ImageBackground 
        source={backgroundImageSource} 
        style={styles.backgroundImage}
        imageStyle={{ opacity: overlayOpacity }}
      >
        <View style={styles.content}>
          {children}
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default OverlayedImage;
