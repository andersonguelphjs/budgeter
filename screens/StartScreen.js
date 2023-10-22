import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../constants/colors";
import { AppContext } from "../store/app-context";
// import { GameContext } from "../store/context";
import Finance from "../models/Finance";
import Button from "../components/ui/Button";
import useSoundPlayer from "../hooks/use-sound";

const StartScreen = ({ navigation }) => {
  // const [gameId, setGameId] = useState(null);
  const ctx = useContext(AppContext);
  // const { state, dispatch } = useContext(GameContext);
  const { playSound } = useSoundPlayer();

  useEffect(() => {
    // console.log("game",state?.game?.id);
    console.log("ctx",ctx);
    const fetchData = async () => {
      // if (!state?.game?.id) {
        const existingData = await ctx.getFirstRow();
        // let gameData;
        if (!existingData) {
          console.log("No existing data.");
          // const newGameId = await ctx.createNewRow({
          //   name: "My Game",
          //   score: 0,
          // });
          // console.log("Created new game, ", newGameId);
          // gameData = getNewGame(newGameId);
        } else {
          console.log("Got saved data.");
          // gameData = { ...new GameData(existingGame).getGame() };
        }

        // dispatch({ type: "UPDATE_GAME", game: gameData });
      // } else {
      //   console.log("Got game id ", state.game.id);
      //   setGameId(state.game.id);
      // }
    };
    fetchData();
  // }, [state?.game?.id]);
}, []);
  // const getNewGame = (newGameId) => {
  //   return {
  //     ...new GameData({ name: "My Game", score: 0, id: newGameId }).getGame(),
  //   };
  // };

  // const handleNavigate = () => {
  //   navigation.navigate("Screen2", {
  //     title: "My Custom Screen",
  //     headerColor: "#ff0000",
  //   });
  // };

  const handleNew = async () => {
    console.log("handleNew");
    playSound();
    // const alreadyNewGame = state.game.history_data.length === 1;

    // if (alreadyNewGame) {
    //   navigation.navigate("DayPrepScreen", {
    //     title: "Day Prep",
    //     headerColor: colors.offWhite,
    //   });
    //   return;
    // }
    
    // dispatch({ type: "UPDATE_GAME", game: getNewGame() });
  };

  let screen = <Text>Initializing...</Text>;
  // if (gameId) {
    screen = (
      <View style={styles.container}>
        <LinearGradient
          colors={[colors.primary, colors.secondary]}
          style={styles.gradient}
        >
          <ImageBackground
            source={require("../assets/img/bg1.png")}
            style={styles.overlayImage}
          >
            {/* <View style={styles.foregroundContainer}>
              <Image
                source={require("../assets/img/bg1.png")}
                style={styles.foregroundImage}
              />
            </View> */}
            <View style={styles.buttonContainer}>
              <Button title="New" onPress={handleNew}>
                New 
              </Button>
              {/* {state.game.history_data.length > 1 && ( */}
                <Button
                  title="Go somewhere"
                  onPress={() => {
                    playSound();
                    // navigation.navigate("DatabaseScreen");
                  }}
                >
                  Continue
                </Button>
              {/* )} */}
            </View>
          </ImageBackground>
        </LinearGradient>
      </View>
    );
  // }
  return screen;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  overlayImage: {
    flex: 1,
    opacity: 0.6,
  },
  foregroundContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
  },
  foregroundImage: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 5,
    borderColor: colors.highlight,
  },
  button: {
    backgroundColor: colors.accent,
    padding: 12,
    borderRadius: 8,
    margin: 20,
  },
  buttonText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default StartScreen;
