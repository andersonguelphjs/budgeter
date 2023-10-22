import * as React from "react";
import { Button, View } from "react-native";

const TopTabScreen1 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("TopTabScreen2")}
        title="Go to TopTabScreen2 (can go anywhere in nav container"
      />
    </View>
  );
};

export default TopTabScreen1;
