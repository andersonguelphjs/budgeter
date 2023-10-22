import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import useSoundPlayer from "../hooks/use-sound";

const SoundScreen = ({navigation}) => {

  const { playSound } = useSoundPlayer();

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Play sound" onPress={() => playSound()} />
        <Button title="Screen6" onPress={() => navigation.navigate('Screen6')} />
      </View>
    );

};

export default SoundScreen;
