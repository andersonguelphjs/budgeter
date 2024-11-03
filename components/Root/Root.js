import { useEffect, useState } from "react";
//see app.json for config of splash screen
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "../../navigation/BottomTabNavigator";
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function prepare() {
       setIsLoading(false);
       console.log("Riit")
    }
    
    prepare();
  }, []);

  if (isLoading) {
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
