import { AppContext } from "../../store/app-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from "react";
//see app.json for config of splash screen
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "../../navigation/BottomTabNavigator";

const Root = () => {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const ctx = useContext(AppContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        ctx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  if (isTryingLogin) {
    SplashScreen.preventAutoHideAsync();
    return null;
  }
  SplashScreen.hideAsync();

  return (

      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>

  );
};

export default Root;
