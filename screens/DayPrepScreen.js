import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { colors } from "../constants/colors";
import { AppContext } from "../store/app-context";
import { GameContext } from "../store/context";
import GameData from "../models/Game";
import Button from "../components/ui/Button";
import useSoundPlayer from "../hooks/use-sound";
import useSpriteSheet from "../hooks/use-sprite-sheet";
import OverlayedImage from "../components/OverlayedImage/OverlayedImage";
import { getRandomNumber, uniqueRandomNumbers } from "../util/random";

const DayPrepScreen = ({ navigation }) => {
  // const ctx = useContext(AppContext);
  const { state, dispatch } = useContext(GameContext);
  const [chosenItems, setChosenItems] = useState([]);

  const { playSound } = useSoundPlayer();
  const spriteSheetImage = require("../assets/img/items_sprite_sheet.png"); // Update with the correct path
  const glowingSpriteSheetImage = require("../assets/img/items_glowing_sprite_sheet.png");
  const totalWidth = 384;
  const totalHeight = 7040;
  const frameWidth = 128;
  const frameHeight = 128;
  const numberOfFrames = 163;
  const tint = "rgba(255, 0, 0, 0.5)";
  const numberOfItems = 8;
  const { renderFrame, renderRandomFrame } = useSpriteSheet({
    spriteSheetImage,
    glowingSpriteSheetImage,
    totalWidth,
    totalHeight,
    frameWidth,
    frameHeight,
    numberOfFrames,
  });
  const [itemsToChooseFrom, setItemsToChooseFrom] = useState([]);

  const handleNavigate = () => {
    playSound();
    navigation.navigate("RandomHourScreen", {
      title: "My Custom Screen",
      headerColor: "#ff0000",
      spriteSheetImage: require("../assets/img/foliage_shaded_sprite_sheet.png"), // Update with the correct path
      totalWidth: 192,
      totalHeight: 1088,
      frameWidth: 64,
      frameHeight: 64,
      numberOfFrames: 25,
      tint: "rgba(255, 0, 0, 0.5)",
    });
  };
  const chooseItemHandler = (index) => {
    setChosenItems(
      (prev) =>
        (prev.includes(index) && prev.filter((item) => item !== index)) || [
          ...prev,
          index,
        ]
    );
  };
  const items = itemsToChooseFrom.map((u, index) => (
    <Text
      key={`item_${index}`}
      style={styles.item}
      onPress={() => chooseItemHandler(index)}
    >
      {renderFrame({
        index: u,
        percentage: 0.5,
        showGlow: chosenItems.includes(index),
      })}
    </Text>
  ));

  // Example: Get 5 unique numbers between 0 and 20
  useEffect(() => {
    setItemsToChooseFrom(uniqueRandomNumbers(numberOfItems, numberOfFrames).sort());
  }, []);
  screen = (
    <SafeAreaView style={styles.container}>
      <OverlayedImage
        backgroundImageSource={require("../assets/AtHome.png")}
        gradientColors={[colors.primary, colors.secondary]}
      >
        <View style={styles.dayContainer}>
          <Text style={styles.dayText}>
            {state.game.history_data[0].getFormattedDate()}
          </Text>
        </View>
        <View style={styles.prepContainer}>
          <Text style={styles.dayText}>Choose your items</Text>
          <View style={styles.itemsContainer}>
            {/* <Text style={styles.item}>{renderFrame({ index: getRandomNumber(0,numberOfFrames), percentage: 0.5, showGlow:true, applyRotation:false, applyScaling:true })}</Text> */}
            {items}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Go to Day screen" onPress={handleNavigate}>
            Go out
          </Button>
        </View>
      </OverlayedImage>
    </SafeAreaView>
  );

  return screen;
};

export default DayPrepScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: "50%",
  },
  dayContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  dayText: {
    textTransform: "uppercase",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  prepContainer: {
    flex: 3,
  },
  itemsContainer: {
    flexDirection: "row", // Arrange children in a row
    flexWrap: "wrap", // Allow children to wrap to the next line
    justifyContent: "space-between",
  },
  item: {
    width: "23%", // Take up nearly half the width of the container
    marginVertical: "1%", // Small vertical margin for spacing between rows
    textAlign: "center",
    // ... any other styles you want for the item
  },
  buttonContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
  },
});
