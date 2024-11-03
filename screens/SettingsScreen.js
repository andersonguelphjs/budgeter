import React, { useContext, useState } from "react";
import Toast from "react-native-toast-message";
import { defaultToastObj } from "../util/ui";
import { View, ScrollView } from "react-native";
import GenericList from "../components/GenericList/GenericList";
import { AppContext } from "../store/app-context";
import IntervalList from "../components/IntervalList/IntervalList";
import MiscSettings from "../components/MiscSettings/MiscSettings";
import text from "../assets/language/text.json";
import { getSettingScreenStyles } from "../styles/screenStyles";

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
  const styles = getSettingScreenStyles(currentTheme);
  const [showingList, setShowingList] = useState("");
  const updateShowingList = (listName) => {
    setShowingList(listName || "");
  };
  const deleteCategoryAndDependencies = async (config) => {
    const { item, foreign_key, table, categories_key, category_items } = config;
    console.log("deleteCategoryAndDependencies ", config);
    const related_events = await event_table.getAllRowsByField(
      foreign_key,
      +item
    );
    console.log(
      `related_events with ${foreign_key} ${item.id} ${related_events.length}`
    );
    const deleted_events = await event_table.deleteAllRowsByField(
      foreign_key,
      +item
    );
    const after_delete_events = await event_table.getAllRowsByField(
      foreign_key,
      +item
    );
    console.log(
      `after_delete_events with ${foreign_key} ${item.id} in db ${after_delete_events.length}`
    );
    console.log(`delete_item from ${categories_key} with id ${item.id}`);
    const delete_item_result = await table.deleteRow(+item);
    

    console.log(
      `(state) before delete current ${categories_key}  ${category_items.length}`
    );
    const newItems = [...category_items].filter((i) => i.id != item);
    const newEvents = [...events].filter((i) => i[foreign_key] != item);
    console.log(
      `(state) after remove item with id ${item}, new ${categories_key} length: ${newItems.length}`
    );
    console.log(`(state) before delete, events length: ${events.length}`);
    if (categories_key === "intervals") {
      dispatch({ type: "UPDATE_INTERVALS", intervals: newItems });
    } else {
      dispatch({ type: "UPDATE_ITEMS", items: newItems, key: categories_key });
    }

    dispatch({ type: "UPDATE_EVENTS", events: newEvents });
    Toast.show(defaultToastObj);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.settingsRow}>
        {/* <HourlyIncomeList /> */}
        <GenericList
          showingList={showingList}
          updateShowingList={updateShowingList}
          itemKey={"hourlyIncomes"}
          currentTheme={currentTheme}
          title={text[language]["Hourly incomes"]}
          items={hourlyIncomes}
          table={hourly_income_table}
          translation={translation}
          dispatch={dispatch}
          playSoundFile={playSoundFile}
          state={state}
          amountOrRate="rate"
          placeholderText={"hourly_wage"}
          text_key={"hourly_wage"}
          foreign_key="hourly_income_id"
          modalText={text[language]["delete_hourly_incomes_msg"]}
          onItemDelete={deleteCategoryAndDependencies}
          styles={styles}
        />
      </View>
      <View style={styles.settingsRow}>
        {/* <HourlyIncomeList /> */}
        <GenericList
          showingList={showingList}
          updateShowingList={updateShowingList}
          itemKey={"oneTimeIncomes"}
          currentTheme={currentTheme}
          title={text[language]["One time incomes"]}
          items={oneTimeIncomes}
          table={one_time_income_table}
          translation={translation}
          dispatch={dispatch}
          playSoundFile={playSoundFile}
          state={state}
          amountOrRate="amount"
          placeholderText={"income"}
          text_key={"income"}
          foreign_key="one_time_income_id"
          modalText={text[language]["delete_one_time_incomes_msg"]}
          onItemDelete={deleteCategoryAndDependencies}
          styles={styles}
        />
      </View>
      <View style={styles.settingsRow}>
        <GenericList
          showingList={showingList}
          updateShowingList={updateShowingList}
          itemKey={"oneTimeExpenses"}
          currentTheme={currentTheme}
          title={text[language]["One time expenses"]}
          items={oneTimeExpenses}
          table={one_time_expense_table}
          translation={translation}
          dispatch={dispatch}
          playSoundFile={playSoundFile}
          state={state}
          amountOrRate="amount"
          placeholderText={"expense"}
          text_key={"expense"}
          foreign_key="one_time_expense_id"
          modalText={text[language]["delete_one_time_expense_msg"]}
          onItemDelete={deleteCategoryAndDependencies}
          styles={styles}
        />
      </View>
      <View style={styles.settingsRow}>
        <IntervalList
          showingList={showingList}
          updateShowingList={updateShowingList}
          foreign_key="interval_id"
          title={text[language]["Shifts"]}
          modalText={text[language]["delete_one_time_incomes_msg"]}
          onItemDelete={deleteCategoryAndDependencies}
          styles={styles}
        />
      </View>
      <View style={styles.settingsRow}>
        <MiscSettings
          showingList={showingList}
          updateShowingList={updateShowingList}
          itemKey={"hourlyIncomes"}
          currentTheme={currentTheme}
          title={text[language]["Other settings"]}
          settings_table={settings_table}
          language={language}
          dispatch={dispatch}
          sound={sound}
          theme={theme}
          notifications={notifications}
          currency={currency}
          styles={styles}
          id={id}
          translation={translation}
        />
      </View>

      <Toast
        style={{
          elevation: 20, //Render the Toast component in your app's entry file, as the LAST CHILD in the View hierarchy
        }}
      />
    </ScrollView>
  );
};

export default SettingsScreen;
