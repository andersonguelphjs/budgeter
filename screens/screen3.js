import React from 'react';
import { View, Button } from 'react-native';
import ContextExample from '../components/counter';
import { Audio } from 'expo-av';

function Screen3({ navigation }) {
  const audioPaths = [
        require('../assets/sounds/UI/UI_001.wav'),
        require('../assets/sounds/UI/UI_002.wav'),
        require('../assets/sounds/UI/UI_003.wav'),
        require('../assets/sounds/UI/UI_004.wav'),
        require('../assets/sounds/UI/UI_005.wav'),
        require('../assets/sounds/UI/UI_006.wav'),
        require('../assets/sounds/UI/UI_007.wav'),
        require('../assets/sounds/UI/UI_008.wav'),
        require('../assets/sounds/UI/UI_009.wav'),
    ]
    function generateRandomNumber(max) {
      return Math.floor(Math.random() * max);

    }
    
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( audioPaths[generateRandomNumber(audioPaths.length)]);
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  // const handleSwapSound = () => {
  //   swapSound('sound1.mp3', require('./assets/newSound.mp3')); // Swap 'sound1.mp3' with 'newSound.mp3'
  // };
// Example usage
//playMultipleSounds(['sound1', 'sound2', 'sound3']);

  return (
    <View>
      {/* Your screen content */}
      <Button title="Go to Screen4" onPress={() => navigation.navigate('Screen4')} />
      <Button title="Play Sound" onPress={playSound} />
      {/* <Button title="Play Multiple Sounds" onPress={handlePlayMultipleSounds} /> */}
      {/* <Button title="Swap Sound" onPress={handleSwapSound} /> */}
      <ContextExample />
    </View>
  );
}

// Repeat the same pattern for Screen2 and Screen3

export default Screen3;
