import React, { Fragment, useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import SpriteSheetAnimation from "../components/animated/SpriteSheetAnimation";
import useSpriteSheet from "../hooks/use-sprite-sheet";
import Button from "../components/ui/Button";
import {
  getVariedColor,
  getRandomNumber,
  getShade,
  getTint,
  getRandomColorVariation,
} from "../util/random";
import RandomizedScene from "../components/scenes/RandomizedScene";
import { Alert } from "react-native";
import { TouchableOpacity } from "react-native";
import { colors } from "../constants/colors";
import Cloud from "../components/bg/Cloud";

const RandomHourScreen = ({ navigation, route }) => {
  // You can access route parameters using route.params

  const {
    title,
    headerColor,
    spriteSheetImage,
    totalWidth,
    totalHeight,
    frameWidth,
    frameHeight,
    numberOfFrames,
    tint,
    startHour = 5,
  } = route.params || {};
  const [hour, setHour] = useState(startHour);
  console.log("title: " + title);
  // const spriteSheetImage = require("../assets/img/foliage_shaded_sprite_sheet.png"); // Update with the correct path
  // const totalWidth = 192;
  // const totalHeight = 1088;
  // const frameWidth = 64;
  // const frameHeight = 64;
  // const numberOfFrames = 25;
  // const tint = "rgba(255, 0, 0, 0.5)";

  const { renderFrame, renderRandomFrame } = useSpriteSheet({
    spriteSheetImage,
    totalWidth,
    totalHeight,
    frameWidth,
    frameHeight,
    numberOfFrames,
    tint, // Pass the tint prop here
  });
  const sky_numberOfSpritesOne = getRandomNumber(1, 20);
  const ground_spriteFrameOne = getRandomNumber(0, numberOfFrames);
  const ground_spriteFrameTwo = getRandomNumber(0, numberOfFrames);
  const ground_numberOfSpritesOne = getRandomNumber(1, 20);
  const ground_numberOfSpritesTwo = getRandomNumber(1, 3);

  const skyColor = getVariedColor(colors[hour]); // Sky blue
  const groundColor = getVariedColor(colors.lawn); // Saddle brown
  const skyGradientColors = [skyColor, getTint(skyColor)]; // Darker on top
  const groundGradientColors = [
    groundColor,
    getShade(groundColor, 50 + hour * 5),
  ]; // Lighter on top

  console.log(ground_numberOfSpritesTwo);
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const randomPercentage = Math.round(Math.random() * 25 + 20);
  const sky_spritesOne = Array.from(
    { length: sky_numberOfSpritesOne },
    (_, index) => {
      const top =
        getRandomNumber(
          0,
          screenHeight -
            Math.round((randomPercentage * screenHeight) / 100) -
            150
        ) - 150;
      return (
        <Text
          key={index}
          style={{
            position: "absolute",
            top: top,
            left: getRandomNumber(0, screenWidth) - 75,
            zIndex: top,
          }}
        >
          <Cloud />
        </Text>
      );
    }
  );
  console.log(skyColor, "screenHeight ", screenHeight);
  const handleButtonClick = () => {
    console.log("Button Clicked!", "You clicked the button!!");
    let newHour = hour + 1;
    if (newHour > 24) newHour = 1;
    setHour(newHour);
  };
  const hud = [
    <View style={{ zIndex: 5 }}>
      <Button onPress={handleButtonClick}>
        <Text>Next hour {hour}:00</Text>
      </Button>
    </View>,
  ];
  const skyComponents = [...hud, ...sky_spritesOne];

  const spritesOne = Array.from(
    { length: ground_numberOfSpritesOne },
    (_, index) => {
      const top = getRandomNumber(
        0,
        screenHeight -
          Math.round((randomPercentage * screenHeight) / 100) -
          frameHeight
      );
      frame = renderFrame({
        index: ground_spriteFrameOne,
        tintColor: getVariedColor("#228B22"),
        position: "absolute",
        top: top,
        left: getRandomNumber(0, screenWidth) - frameWidth,
        zIndex: top,
      });
      return frame;
    }
  );
  const spritesTwo = Array.from(
    { length: ground_numberOfSpritesTwo },
    (_, index) => {
      const top = getRandomNumber(
        0,
        screenHeight -
          Math.round((randomPercentage * screenHeight) / 100) -
          frameHeight
      );
      frame = renderFrame({
        index: ground_spriteFrameTwo,
        tintColor: getVariedColor("#228B22"),
        top: top,
        left: getRandomNumber(0, screenWidth) - frameWidth,
        zIndex: top,
      });
      return frame;
    }
  );

  const charSprite = [
    <View style={{ position: "absolute", top: 2-110, left: "40%", zIndex: 2 }}>
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
    </View>,
  ];
  const groundComponents = [
    // Array of components to be placed on the ground
    ...(charSprite && charSprite),
    ...spritesOne,
    ...spritesTwo,

    // Add more ground components here
  ];

  return (
    <RandomizedScene
      skyColor={skyColor}
      groundColor={groundColor}
      skyGradientColors={skyGradientColors}
      groundGradientColors={groundGradientColors}
      gradientDirection="top-to-bottom"
      skyComponents={skyComponents}
      groundComponents={groundComponents}
      randomPercentage={randomPercentage}
    />
  );
};
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "purple",
//     position: "relative",
//   },
// });

export default RandomHourScreen;
