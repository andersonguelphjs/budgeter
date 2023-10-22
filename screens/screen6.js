import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Shadow } from "react-native-shadow-2";

const Screen6 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.appContainer}>
        <Shadow>
          <Text style={{ margin: 20, fontSize: 20 }}>🙂</Text>
        </Shadow>
        <Shadow
          distance={15}
          startColor={"#eb9066d8"}
          endColor={"#ff00ff10"}
          offset={[3, 4]}
        >
          <View
            style={{
              borderTopStartRadius: 24,
              borderBottomEndRadius: 0,
              borderRadius: 10,
              backgroundColor: "#c454f0dd",
            }}
          >
            <Text style={{ margin: 20, fontSize: 20 }}>🤯</Text>
          </View>
        </Shadow>
      </View>
      <Button
        title="Go to http"
        onPress={() => navigation.navigate("HttpScreen")}
      />
            <Button
        title="Go to Sound scren"
        onPress={() => navigation.navigate("SoundScreen")}
      />
    </View>
  );
};

export default Screen6;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
