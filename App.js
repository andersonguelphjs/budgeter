import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import Root from "./components/Root/Root";
import AppContextProvider from "./store/app-context";
import appStyles from "./styles/appStyles";

const App = () => {
  return (
    <SafeAreaView style={appStyles.container}>
      <AppContextProvider>
        <StatusBar />
        <Root />
      </AppContextProvider>
    </SafeAreaView>
  );
};

export default App;
