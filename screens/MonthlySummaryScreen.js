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
import { getMonthlySummaryScreenStyles } from "../styles/screenStyles";
const MonthlySummaryScreen = () => {
  const [selectedType, setSelectedType] = useState("income");
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [markedDates, setMarkedDates] = useState({});

  // Retrieving hourlyIncomes and intervals from context
  const ctx = useContext(AppContext);
  const { intervals, events, categories, themes, settings } = ctx.state;
  const { dispatch, playSoundFile, state, translation, tables } = ctx;
  const { hourlyIncomes, oneTimeIncomes, oneTimeExpenses } = categories;
  const { sound, theme, notifications, currency, id, language } = settings;
  const currentTheme = themes[theme] || themes["LIGHT"];
  const styles = getMonthlySummaryScreenStyles(currentTheme)
  console.log("mss " ,styles);
  const buttons = [
    {
      title: translation[language]["expense"],
      onPress: () => setSelectedType("expense"),
    },
    {
      title: translation[language]["income"],
      onPress: () => setSelectedType("income"),
    },
  ];
  useEffect(() => {
    if (events)
      setMarkedDates(
        convertToCalendarEvents({
          events: events,
          categories: categories,
        })
      );
  }, [events]);


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
        translation={translation[language]}
        styles={styles}
      />
    </ScrollView>
  );
};



export default MonthlySummaryScreen;
