import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import FadeInOut from "../components/animated/FadeInOut";

const Screen4 = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleFadeIn = () => {
    setIsVisible(true);
  };

  const handleFadeOut = () => {
    setIsVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FadeInOut
        fadeInAction={handleFadeIn}
        fadeOutAction={handleFadeOut}
        isVisible={isVisible}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Hello, World!</Text>
      </FadeInOut>
      <Button title="Fade In" onPress={handleFadeIn} />
      <Button title="Fade Out" onPress={handleFadeOut} />
      <Button title="Go to screen5" onPress={() => navigation.navigate('Screen5')} />
    </View>
  );
};

export default Screen4;
