import React from "react";
import { View, Text } from "react-native";
import Button from "../ui/Button";

const SettingOption = ({
  onPress,
  styles,
  shape = "pill",
  text,
  buttonText,
  backgroundColor,
  textColor
}) => {
  return (
    <View style={styles.settingRow}>
      <Text style={styles.optionTitle}>{text}</Text>
      <Button
        onPress={onPress}
        shape={shape}
        backgroundColor={backgroundColor}
        textStyle={{ color: textColor }}
      >
        {buttonText}
      </Button>
    </View>
  );
};

export default SettingOption;
