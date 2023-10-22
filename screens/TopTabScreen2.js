import * as React from "react";
import { Button, View } from "react-native";

const TopTabScreen2 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("TopTabScreen1")}
        title="Go to TopTabScreen1 (can go anywhere in nav container"
      />
    </View>
  );
};

export default TopTabScreen2;
