import * as React from "react";
import { Button, View } from "react-native";

const MaterialBottomTabScreen1 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("MaterialBottomTabScreen2")}
        title="Go to MaterialBottomTabScreen2"
      />
    </View>
  );
};

export default MaterialBottomTabScreen1;
