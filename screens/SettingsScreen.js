import React, { useContext, useState } from "react";
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
import Button from "../components/ui/Button";
import GenericList from "../components/GenericList/GenericList";
import { AppContext } from "../store/app-context";
import IntervalList from "../components/IntervalList/IntervalList";
import MiscSettings from "../components/MiscSettings/MiscSettings";

const SettingsScreen = ({ navigation }) => {
  const ctx = useContext(AppContext);

  const { dispatch, playSoundFile, state, translation, tables } = ctx;
  const {
    hourly_income_table,
    settings_table,
    one_time_income_table,
    one_time_expense_table,
    event_table,
  } = tables;
  const { categories, settings, events, themes } = state;
  const { hourlyIncomes, oneTimeIncomes, oneTimeExpenses } = categories;
  const { sound, theme, notifications, currency, id, language } = settings;
  const currentTheme = themes[theme] || themes["LIGHT"];
  // console.log("currentTheme: ", themes);
  const styles = StyleSheet.create({
    scrollViewContent: {
      flex: 1,
      padding: 16,
      backgroundColor: currentTheme.background,
      color: currentTheme.text,
    },
    headerTitle: {
      color: currentTheme.text,
    },
    settingRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    settingsRow: {
      marginTop: 15,
    },
  });

  const deleteCategoryAndDependencies = async (config) => {
    const { item, foreign_key, table, categories_key, category_items } = config;
    console.log("deleteCategoryAndDependencies ", config)
    const related_events = await event_table.getAllRowsByField(
      foreign_key,
      +item
    );
    //console.log(`related_events with ${foreign_key} ${item.id} ${related_events.length}`);
    const deleted_events = await event_table.deleteAllRowsByField(
      foreign_key,
      +item
    );
    const after_delete_events = await event_table.getAllRowsByField(
      foreign_key,
      +item
    );
    //console.log(`after_delete_events with ${foreign_key} ${item.id} in db ${after_delete_events.length}`)

    const delete_item_result = await table.deleteRow(+item);
    //console.log(`delete_item from ${categories_key} with id ${item.id}`)

    console.log(
      `(state) before delete current ${categories_key}  ${category_items.length}`
    );
    const newItems = [...category_items].filter((i) => i.id != item);;
    const newEvents  = [...events].filter((i) => i[foreign_key] != item);;
    console.log(
      `(state) after remove item with id ${item}, new ${categories_key} length: ${newItems.length}`
    );
    console.log(`(state) before delete, events length: ${events.length}`);
    if (categories_key === "intervals"){
      dispatch({ type: "UPDATE_INTERVALS", intervals: newItems});
    }
    else{
      dispatch({ type: "UPDATE_ITEMS", items: newItems, key: categories_key });
    }

    dispatch({ type: "UPDATE_EVENTS", events: newEvents });
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      // Add additional props you need for the ScrollView
    >
      <View style={styles.settingsRow}>
        {/* <HourlyIncomeList /> */}
        <GenericList
          itemKey={"hourlyIncomes"}
          currentTheme={currentTheme}
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
          foreign_key="hourly_income_id"
          modalText={
            "Delete hourly income category?\n\nThis will delete all related events"
          }
          onItemDelete={deleteCategoryAndDependencies}
        />
      </View>
      <View style={styles.settingsRow}>
        {/* <HourlyIncomeList /> */}
        <GenericList
          itemKey={"oneTimeIncomes"}
          currentTheme={currentTheme}
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
          foreign_key="one_time_income_id"
          modalText={
            "Delete one time income category?\n\nThis will delete all related events"
          }
          onItemDelete={deleteCategoryAndDependencies}
        />
      </View>
      <View style={styles.settingsRow}>
        <GenericList
          itemKey={"oneTimeExpenses"}
          currentTheme={currentTheme}
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
          foreign_key="one_time_expense_id"
          modalText={
            "Delete one time expense category?\n\nThis will delete all related events"
          }
          onItemDelete={deleteCategoryAndDependencies}
        />
      </View>
      <View style={styles.settingsRow}>
        <IntervalList 
          foreign_key="interval_id"
          modalText={
            "Delete interval?\n\nThis will delete all related events"
          }
          onItemDelete={deleteCategoryAndDependencies}
        />
      </View>
      <MiscSettings
        settings_table={settings_table}
        language={language}
        dispatch={dispatch}
        sound={sound}
        theme={theme}
        notifications={notifications}
        currency={currency}
        currentTheme={currentTheme}
        styles={styles}
        id={id}
      />
    </ScrollView>
  );
};

export default SettingsScreen;
