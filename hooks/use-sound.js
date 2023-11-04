import React, { useEffect, useState } from "react";
import { Audio } from "expo-av";
import { defaultSounds } from "../assets/soundExports/soundExports";

const useSoundPlayer = (audioPaths = defaultSounds) => {
  const [sound, setSound] = useState();
  const generateRandomNumber = (max) => Math.floor(Math.random() * max)
  const playSound = async (index) => {
    const { sound } = await Audio.Sound.createAsync(
      (index && audioPaths[index - 1]) ||
        audioPaths[generateRandomNumber(audioPaths.length)]
    );
    setSound(sound);
    await sound.playAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
          // console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return { playSound };
};

export default useSoundPlayer;
