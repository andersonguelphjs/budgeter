import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import SpriteSheetAnimation from "../components/animated/SpriteSheetAnimation";

const HourScreen = ({ navigation, route }) => {
  // You can access route parameters using route.params
  const { param1, param2 } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hour Screen</Text>
      <SpriteSheetAnimation
        frameWidth={80}
        frameHeight={110}
        totalFrames={24}
        duration={1000}
        totalHeight={330}
        totalWidth={720}
        imagePath={require("../assets/img/kenney_platformer-characters/PNG/Adventurer/adventurer_tilesheet.png")}
        //imagePath="../assets/img/kenney_platformer-characters/PNG/Adventurer/adventurer_tilesheet.png"
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Use the Image component to display the white PNG with a transparent background */}
      <Image
        style={{ width: 64, height: 64, alignSelf: 'center', tintColor: 'blue' }}
        source={require('../assets/img/resized/sprite_0052.png')}
        resizeMode="contain"
      />
    </View>
    <View style={styles.container2}>
      {/* Base image */}
      {/* <Image
        source={require('../assets/img/resized/sprite_0001.png')}
        style={[styles.image, { width: 64, height: 64, alignSelf: 'center', tintColor: 'blue' }]}
        resizeMode="cover"
      />
      <Image
        source={require('../assets/img/resized2/sprite_005.png')}
        style={[styles.image, styles.shadedImage]}
        resizeMode="cover"
        // You can adjust the opacity as needed
        opacity={0.6} 
      /> */}
    </View>

      <Button
        title="Go to Another Screen"
        onPress={() => navigation.navigate("Screen2")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    position: 'relative', // Make the container relative
    width: 64,
    height: 64,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  shadedImage: {
    // Use position absolute to overlay the shaded image on top of the base image
    position: 'absolute',
    top: 0,
    left: 0,
  },
});











export default HourScreen;
