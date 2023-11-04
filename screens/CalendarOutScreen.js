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
const CalendarOutScreen = () => {
  const [selectedType, setSelectedType] = useState("income");
  const [markedDates, setMarkedDates] = useState({});
  // const [HourlyIncome, setHourlyIncome] = useState(null);
  // const [interval, setInterval] = useState(null);
  // const [amount, setAmount] = useState(0);
  // const [note, setNote] = useState("");
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
  const { intervals, events, categories } = ctx.state;

  const { state, dispatch, playSoundFile, tables } = ctx;
  const { event_table } = tables;
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

  const toggleSwitch = () => {
    setSelectedType((previousState) =>
      previousState === "expense" ? "income" : "expense"
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* <ExpenseIncomeSwitch selectedType={selectedType} switchHandler={toggleSwitch} /> */}
      <ButtonSwitch
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default CalendarOutScreen;
