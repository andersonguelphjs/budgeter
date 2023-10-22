import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { AppContext } from "./store/app-context";
import Root from "./components/Root/Root";
import AppContextProvider from "./store/app-context";

const App = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <AppContextProvider>
        <StatusBar style="light" />
          <Root/>  
      </AppContextProvider>
    </SafeAreaView>
  );
};

export default App;
