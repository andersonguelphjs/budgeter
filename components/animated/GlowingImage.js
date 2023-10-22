import React from "react";
import { View, Image, StyleSheet } from "react-native";
import ShadowView from "react-native-shadow";

const GlowingImage = ({ source, glowColor = "#FFFFFF", glowIntensity = 1 }) => {
  const shadowStyle = {
    shadowColor: glowColor,
    shadowOpacity: glowIntensity,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  };

  return (
    <ShadowView
      style={styles.container}
      shadowColor={glowColor}
      shadowOpacity={glowIntensity}
    >
      <Image source={source} style={styles.image} />
    </ShadowView>
  );
};

export default GlowingImage;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
});
