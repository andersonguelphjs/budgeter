import * as React from "react";
import { Button, View } from "react-native";

const DrawerScreen2 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("DrawerScreen1")}
        title="Go to DrawerScreen1"
      />
    </View>
  );
};

export default DrawerScreen2;
