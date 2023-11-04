import React, { useContext } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import Button from "../components/ui/Button";
import GenericList from "../components/GenericList/GenericList";
import { AppContext } from "../store/app-context";
import IntervalList from "../components/IntervalList/IntervalList";

const SettingsScreen = ({ navigation }) => {
  const ctx = useContext(AppContext);
  const { dispatch, playSoundFile, state, translation, tables } = ctx;
  const {
    hourly_income_table,
    settings_table,
    one_time_income_table,
    one_time_expense_table,
  } = tables;
  const { categories, settings } = state;
  const { hourlyIncomes, oneTimeIncomes, oneTimeExpenses } = categories;
  const { sound, theme, notifications, currency, id, language } = settings;

  console.log("settings id: ", id);

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
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      // Add additional props you need for the ScrollView
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        {/* <HourlyIncomeList /> */}
        <GenericList
          itemKey={"HourlyIncomes"}
          title={"Hourly Incomes"}
          items={hourlyIncomes}
          table={hourly_income_table}
          translation={translation}
          dispatch={dispatch}
          playSoundFile={playSoundFile}
          state={state}
          amountOrRate={"rate"}
          placeholderText={"hourly_wage"}
          text_key={"hourly_wage"}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        {/* <HourlyIncomeList /> */}
        <GenericList
          itemKey={"oneTimeIncomes"}
          title={"One Time Incomes"}
          items={oneTimeIncomes}
          table={one_time_income_table}
          translation={translation}
          dispatch={dispatch}
          playSoundFile={playSoundFile}
          state={state}
          amountOrRate={"amount"}
          placeholderText={"income"}
          text_key={"income"}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        {/* <HourlyIncomeList /> */}
        <GenericList
          itemKey={"oneTimeExpenses"}
          title={"One Time Expenses"}
          items={oneTimeExpenses}
          table={one_time_expense_table}
          translation={translation}
          dispatch={dispatch}
          playSoundFile={playSoundFile}
          state={state}
          amountOrRate={"amount"}
          placeholderText={"expense"}
          text_key={"expense"}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <IntervalList />
      </View>
      <View style={styles.container}>
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Language:</Text>
          <Button onPress={toggleLanguage} shape="pill">
            {language}
          </Button>
        </View>
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Sound:</Text>
          <Button onPress={toggleSound} shape="pill">
            {sound === 1 ? "ON" : "OFF"}
          </Button>
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Theme:</Text>
          <Button onPress={toggleTheme} shape="pill">
            {theme}
          </Button>
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Notifications:</Text>
          <Button onPress={toggleNotifications} shape="pill">
            {notifications === 1 ? "ON" : "OFF"}
          </Button>
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Currency:</Text>
          <Button onPress={toggleCurrency} shape="pill">
            {currency}
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollViewContent: {
    // Apply the styles you need for the content inside the scroll view
    // For example, you might want to add padding or specific alignment
    padding: 16,
    paddingBottom: 50, // Add padding at the bottom for better visual spacing
  },
  container: {
    flex: 1,
    padding: 20,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  settingLabel: {
    fontSize: 16,
  },
});
export default SettingsScreen;
