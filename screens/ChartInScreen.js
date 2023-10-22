import * as React from "react";
import { Button, View } from "react-native";

const ChartInScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        // onPress={() => navigation.navigate("DrawerScreen2")}
        onPress={() => console.log("pressed bottom nav")}
        title="Chart In"
      />
    </View>
  );
};

export default ChartInScreen;
