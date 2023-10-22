import * as React from "react";
import { Button, View } from "react-native";

const DrawerScreen1 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("DrawerScreen2")}
        title="Go to DrawerScreen2"
      />
    </View>
  );
};

export default DrawerScreen1;
