// MiscSettings.js
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SettingOption from "../SettingOption/SettingOption";

const MiscSettings = ({
  language,
  sound,
  theme,
  notifications,
  currency,
  currentTheme,
  styles,
  settings_table,
  id,
  dispatch,
  title,
  showingList,
  updateShowingList,
  translation,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    updateShowingList((title !== showingList && title) || "");
  };
  useEffect(() => {
    setIsCollapsed(showingList !== title);
  }, [setIsCollapsed, showingList, updateShowingList, isCollapsed]);

  const toggleLanguage = async () => {
    const newLanguage = language === "en" ? "ja" : "en";
    const result = await settings_table.updateRow(id, {
      language: newLanguage,
    });
    console.log("toggleLanuage ", result);
    dispatch({ type: "TOGGLE_LANGUAGE", language: newLanguage });
  };
  const toggleSound = async () => {
    const newSound = sound === 1 ? 0 : 1;
    const result = await settings_table.updateRow(id, { sound: newSound });
    console.log("toggleSound ", result);
    dispatch({ type: "TOGGLE_SOUND", sound: newSound });
  };

  const toggleTheme = async () => {
    const newTheme = theme === "LIGHT" ? "DARK" : "LIGHT";
    const result = await settings_table.updateRow(id, { theme: newTheme });
    dispatch({ type: "TOGGLE_THEME", theme: newTheme });
  };
  const toggleNotifications = async () => {
    const newNotifications = notifications === 1 ? 0 : 1;
    const result = await settings_table.updateRow(id, {
      notifications: newNotifications,
    });
    console.log("toggleTheme ", result);
    dispatch({ type: "TOGGLE_NOTIFICATIONS", notifications: newNotifications });
  };
  const toggleCurrency = async () => {
    const newCurrency = currency === "¥" ? "$" : "¥";
    const result = await settings_table.updateRow(id, {
      currency: newCurrency,
    });
    dispatch({ type: "TOGGLE_CURRENCY", currency: newCurrency });
  };
  return (
    <>
      <TouchableOpacity onPress={toggleCollapse}>
        <Text style={styles.headerTitle}>
          {title}
          {isCollapsed ? (
            <Ionicons name="caret-down" />
          ) : (
            <Ionicons name="caret-up" />
          )}
        </Text>
      </TouchableOpacity>

      {!isCollapsed && (
        <View>
          <SettingOption
            onPress={toggleLanguage}
            styles={styles}
            text={translation[language]["language"]}
            buttonText={translation[language][language]}
            backgroundColor={currentTheme.button}
            textColor={currentTheme.inverse_text}
          />
          <SettingOption
            onPress={toggleTheme}
            styles={styles}
            text={translation[language]["theme"]}
            buttonText={translation[language][theme]}
            backgroundColor={currentTheme.button}
            textColor={currentTheme.inverse_text}
          />
          <SettingOption
            onPress={toggleSound}
            styles={styles}
            text={translation[language]["sound"]}
            buttonText={
              sound === 1
                ? translation[language]["on"]
                : translation[language]["off"]
            }
            backgroundColor={currentTheme.button}
            textColor={currentTheme.inverse_text}
          />
          <SettingOption
            onPress={toggleNotifications}
            styles={styles}
            text={translation[language]["notifications"]}
            buttonText={
              sound === 1
                ? translation[language]["on"]
                : translation[language]["off"]
            }
            backgroundColor={currentTheme.button}
            textColor={currentTheme.inverse_text}
          />
          <SettingOption
            onPress={toggleCurrency}
            styles={styles}
            text={translation[language]["currency"]}
            buttonText={currency}
            backgroundColor={currentTheme.button}
            textColor={currentTheme.inverse_text}
          />
        </View>
      )}
    </>
  );
};

export default MiscSettings;
