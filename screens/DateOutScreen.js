import * as React from "react";
import { Button, View } from "react-native";

const DateOutScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        // onPress={() => navigation.navigate("DrawerScreen2")}
        onPress={() => console.log("pressed bottom nav")}
        title="DateOutScreen"
      />
    </View>
  );
};

export default DateOutScreen;
