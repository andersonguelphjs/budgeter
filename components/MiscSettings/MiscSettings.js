// MiscSettings.js
import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity,
} from "react-native";
import Button from "../ui/Button";

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
  updateShowingList
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    console.log("Title ", title)
    updateShowingList(title !== showingList && title || "")
  };
  useEffect(() => {
    console.log("useffect ", title)
    setIsCollapsed(showingList !== title);
  },[setIsCollapsed,showingList,updateShowingList,isCollapsed])
  // const toggleExpand = () => {
  //   LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  //   setExpanded(!expanded);
  // };

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
    console.log("toggleTheme ", result);
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
    console.log("toggleTheme ", result);
    dispatch({ type: "TOGGLE_CURRENCY", currency: newCurrency });
  };
  return (
    <View style={styles.flex_1_container}>
      <TouchableOpacity onPress={toggleCollapse}>
        <Text style={styles.headerTitle}>{isCollapsed ? title : `Hide ${title}`}</Text>
      </TouchableOpacity>

      {!isCollapsed && (
        <View>
          <View style={styles.settingRow}>
            <Text style={styles.optionTitle}>Language:</Text>
            <Button onPress={toggleLanguage} shape="pill" backgroundColor={currentTheme.button} textStyle={{color: currentTheme.inverse_text}}>
              {language}
            </Button>
          </View>
          <View style={styles.settingRow}>
            <Text style={styles.optionTitle}>Sound:</Text>
            <Button onPress={toggleSound} shape="pill" backgroundColor={currentTheme.button} textStyle={{color: currentTheme.inverse_text}}>
              {sound === 1 ? "ON" : "OFF"}
            </Button>
          </View>

          <View style={styles.settingRow}>
            <Text style={styles.optionTitle}>Theme:</Text>
            <Button onPress={toggleTheme} shape="pill" backgroundColor={currentTheme.button} textStyle={{color: currentTheme.inverse_text}}>
              {theme}
            </Button>
          </View>

          <View style={styles.settingRow}>
            <Text style={styles.optionTitle}>Notifications:</Text>
            <Button onPress={toggleNotifications} shape="pill" backgroundColor={currentTheme.button} textStyle={{color: currentTheme.inverse_text}}>
              {notifications === 1 ? "ON" : "OFF"}
            </Button>
          </View>

          <View style={styles.settingRow}>
            <Text style={styles.optionTitle}>Currency:</Text>
            <Button onPress={toggleCurrency} shape="pill" backgroundColor={currentTheme.button} textStyle={{color: currentTheme.inverse_text}}>
              {currency}
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

export default MiscSettings;
