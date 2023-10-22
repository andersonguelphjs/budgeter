import * as React from "react";
import { Button, View } from "react-native";

const MaterialBottomTabScreen2 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("MaterialBottomTabScreen1")}
        title="Go to MaterialBottomTabScreen1"
      />
    </View>
  );
};

export default MaterialBottomTabScreen2;
