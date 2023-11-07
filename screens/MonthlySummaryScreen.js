import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Calendar } from "react-native-calendars";
import { AppContext } from "../store/app-context";
import { getHourMinutes } from "../util/dates";
import { Ionicons } from "@expo/vector-icons";
import { dynamicStyle } from "../util/text";
import { convertToCalendarEvents } from "../util/dates";
import MonthSummary from "../components/MonthSummary/MonthSummary";
import MonthTable from "../components/MonthTable/MonthTable";
import ExpenseIncomeSwitch from "../components/ExpenseIncomeSwitch/ExpenseIncomeSwitch";
import ButtonSwitch from "../components/ui/ButtonSwitch";
import { getFilteredMarkedDates } from "../util/budgeter_util";
const MonthlySummaryScreen = () => {
  const [selectedType, setSelectedType] = useState("income");
  const [markedDates, setMarkedDates] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(1);
  const buttons = [
    {
      title: "Expense",
      onPress: () => {
        setSelectedType("expense");
        // additional actions
      },
    },
    {
      title: "Income",
      onPress: () => {
        setSelectedType("income");
        // additional actions
      },
    },
  ];
  // Retrieving hourlyIncomes and intervals from context
  const ctx = useContext(AppContext);
  const { intervals, events, categories, themes, settings } = ctx.state;
  const { dispatch, playSoundFile, state, translation, tables } = ctx;
  const { hourlyIncomes, oneTimeIncomes, oneTimeExpenses } = categories;
  const { sound, theme, notifications, currency, id, language } = settings;
  const currentTheme = themes[theme] || themes["LIGHT"];
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentTheme.background,
      color: currentTheme.text,
    },
  });
  useEffect(() => {
    const performDBReinit = async () => {
      const reinit = await event_table.reinitializeDb();
      console.log("event db reinit ", reinit);
    };
    const fetchEventSchema = async () => {
      const schema = await event_table.getSchema();
      console.log("shcmea", schema);
    };
    if (events)
      setMarkedDates(
        convertToCalendarEvents({
          events: events,
          categories: categories,
        })
      );
    //performDBReinit()
    //fetchEventSchema()
  }, [events]);
  //console.log("COS events ", events);
  // console.log("CIS intervals ", intervals)
  // const chosenTypes = hourlyIncomes.filter(
  //   (c) => c.type === selectedType
  // );


  return (
    <ScrollView style={styles.container}>
      {/* <ExpenseIncomeSwitch selectedType={selectedType} switchHandler={toggleSwitch} /> */}
      <ButtonSwitch
        currentTheme={currentTheme}
        buttons={buttons}
        multiple={false}
        selectedIndices={selectedIndex}
        setSelectedIndices={setSelectedIndex}
      />
      <MonthSummary
        markedDates={getFilteredMarkedDates(markedDates, selectedType)}
        selectedType={selectedType}
      />
    </ScrollView>
  );
};



export default MonthlySummaryScreen;
