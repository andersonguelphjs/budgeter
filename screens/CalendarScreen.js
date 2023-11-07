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
import ExpenseIncomeSwitch from "../components/ExpenseIncomeSwitch/ExpenseIncomeSwitch";
import EventsForSelectedDay from "../components/EventsForSelectedDay/EventsForSelectedDay";
import EventAdd from "../components/EventAdd/EventAdd";
import ButtonSwitch from "../components/ui/ButtonSwitch";
import { getFilteredMarkedDates } from "../util/budgeter_util";
const CalendarScreen = () => {
  const [selectedType, setSelectedType] = useState("income");
  const [selectedDay, setSelectedDay] = useState({});
  const [markedDates, setMarkedDates] = useState({});
  const [hourlyIncome, setHourlyIncome] = useState(null);
  const [oneTimeIncome, setOneTimeIncome] = useState(null);
  const [oneTimeExpense, setOneTimeExpense] = useState(null);
  const [incomeType, setIncomeType] = useState("hourly");
  const [interval, setInterval] = useState(null);
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState("");
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

  // Retrieving HourlyIncomes and intervals from context
  const ctx = useContext(AppContext);
  const { dispatch, playSoundFile, state, translation, tables } = ctx;
  const { intervals, events, categories, themes, settings } = ctx.state;
  const { hourlyIncomes, oneTimeIncomes, oneTimeExpenses } = categories;
  const { sound, theme, notifications, currency, id, language } = settings;
  const currentTheme = themes[theme] || themes["LIGHT"];
  const {
    hourly_income_table,
    settings_table,
    one_time_income_table,
    one_time_expense_table,
    event_table,
  } = tables;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentTheme.background,
      color: currentTheme.text,
    },
    chooseADayText: {
      textAlign: "center",
      backgroundColor: currentTheme.button,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black'
    },
    addEventText: {
      textAlign: "center",
      backgroundColor: currentTheme.button,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black'
    },
    hidden: {
      display: "none",
    },
    horizontalLayout: {
      flexDirection: "row", // this makes children align horizontally
      alignItems: "center", // this centers them vertically
      justifyContent: "flex-start", // this aligns items to the start of the parent container
      marginVertical: 10, // add margin if needed
    },
    label: {
      marginRight: 10, // space between label and input
      // ... other styles for the label ...
    },
    input: {
      flex: 1, // this makes the input take up the remaining space
      height: 40, // or other height as needed
      // ... other styles for the input ...
    },
    switchContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 10, // add some margin at the top and bottom if needed
    },
    label: {
      marginHorizontal: 8, // changed from margin to marginHorizontal for specificity
    },
    itemContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc",
    },
    eventListContainer: {
      padding: 10,
    },
    eventItem: {
      flexDirection: "row",
      padding: 5,
      borderRadius: 5,
      justifyContent: "space-between",
      alignItems: "center",
      // additional styling...
    },
    addEventContainer: {
      padding: 15,
      backgroundColor: currentTheme.background,
      color: currentTheme.text,
      borderWidth: 1,
      borderColor: 'black'
    },
    addButton: {
      backgroundColor: "#4CAF50",
      padding: 10,
      opacity: 1,
      borderWidth: 1,
      borderColor: 'black'
      // additional styling...
    },
    addButtonText: {
      color: "#fff",
      textAlign: "center",
      // additional styling...
    },
    disabledButton: {
      padding: 10,
      // Maybe grey it out, or make it more transparent
      backgroundColor: "grey", // or whatever you prefer
      // ... other styles ...
    },
    disabledButtonText: {
      textAlign: "center",
      color: "darkgrey", // or whatever you prefer
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
    const newMarkedDates = convertToCalendarEvents({
      events: events,
      categories: categories,
    });
    //console.log("newMarkedDates ", Object.keys(newMarkedDates).length)
    if (events) setMarkedDates(newMarkedDates);
    //performDBReinit()
    //fetchEventSchema()
  }, [events]);

  const chosenTypes =
    selectedType === "expenses"
      ? oneTimeExpenses
      : hourlyIncomes.concat(oneTimeIncomes);

  const deleteEvent = async (config) => {
    console.log("deleteEvent ", config);
    // const newItems = intervals.filter((_, i) => i !== index);
    // const result = await deleteIntervalRow(intervals[index].id);
    // console.log("interval delete result ",result)
    const { dateString } = config?.day;
    const { key, id } = config;
    console.log("dateString ", dateString, key, id);
    const result = await event_table.deleteRow(id);
    console.log("result ", result);
    const count = await event_table.getRowCount();
    console.log("count", count);

    console.log("Events", events.length);
    const newEvents = events.filter((i) => i.id !== id);
    console.log("newEvents", newEvents.length);
    dispatch({ type: "UPDATE_EVENTS", events: newEvents });
  };

  const addEvent = async () => {
    const { dateString, day, month, timestamp, year } = selectedDay;
    const _hourly_income_id =
      (selectedType === "income" && incomeType === "hourly" && hourlyIncome) ||
      null;
    const _one_time_income_id =
      (selectedType === "income" &&
        incomeType === "one_time" &&
        oneTimeExpense) ||
      null;
    const _interval_id =
      (selectedType === "income" && incomeType === "hourly" && interval) ||
      null;
    const _one_time_expense_id =
      (selectedType === "expense" && oneTimeExpense) || null;
    const _amount =
      ((selectedType === "expense" ||
        (selectedType === "income" && incomeType === "one_time")) &&
        amount) ||
      null;
    const _note = (selectedType === "expense" && note) || "";
    const _event_type_key =
      (selectedType === "expense" && "one_time_expense_id") ||
      (incomeType === "hourly" && "hourly_income_id") ||
      "one_time_income_id";

    const itemToAdd = {
      hourly_income_id: _hourly_income_id,
      one_time_income_id: _one_time_income_id,
      one_time_expense_id: _one_time_expense_id,
      interval_id: _interval_id,
      type: selectedType,
      amount: _amount,
      note: _note,
      event_type_key: _event_type_key,
      timestamp: timestamp,
      date: dateString,
    };

    const result = await event_table.createNewRow(itemToAdd);

    itemToAdd.id = result;
    const count = await event_table.getRowCount();
    playSoundFile(null, 2);
    const newEvents = [...events, itemToAdd];
    dispatch({
      type: "UPDATE_EVENTS",
      events: newEvents,
    });
    // Reset the input fields after adding the event
    clearDateData();
  };

  const handleDayPress = (day) => {
    console.log(day);

    // If you press on a day, capture that information, typically the dateString
    const { dateString } = day;

    // Prepare the new markedDates state with the selected day
    const newMarkedDates = {
      ...markedDates, // keep all current marked dates as is
      [dateString]: {
        // add/override the pressed day
        ...markedDates[dateString], // keep already marked events or other info
        selected: true, // set 'selected' to true for our pressed day
        selectedColor: "#D3D3D3", // this is optional: set a specific color for the selection
      },
    };

    // If you wish to only have one selected day at a time, you should remove the
    // 'selected' marking from the previously selected date. This loop does that.
    Object.keys(newMarkedDates).forEach((date) => {
      if (date !== dateString) {
        delete newMarkedDates[date].selected;
        delete newMarkedDates[date].selectedColor;
      }
    });

    // Update state with the new markings, this will refresh the calendar
    setMarkedDates(newMarkedDates);

    // Now, 'day' is marked as selected visually on the calendar.

    setSelectedDay(day);
  };

  const clearDateData = () => {
    setHourlyIncome(null);
    setOneTimeIncome(null);
    setOneTimeExpense(null);
    setInterval(null);
    setAmount(0);
    setNote("");
  };
  const clearSelections = () => {
    console.log("clearSelections");

    // Update state with the new markings, this will refresh the calendar
    setMarkedDates((prev) => {
      Object.keys(prev).forEach((date) => {
        delete prev[date].selected;
        delete prev[date].selectedColor;
      });
      return prev;
    });
    clearDateData();
    setSelectedDay({});
  };
  
  const isDarkMode = theme === "DARK";
  const calendarTheme = {
    backgroundColor: isDarkMode ? "#000" : "#fff",
    calendarBackground: isDarkMode ? "#1c1c1e" : "#fff",
    textSectionTitleColor: isDarkMode ? "#b6c1cd" : "#b6c1cd",
    textSectionTitleDisabledColor: isDarkMode ? "#d9e1e8" : "#d9e1e8",
    selectedDayBackgroundColor: isDarkMode ? "#00adf5" : "#00adf5",
    selectedDayTextColor: isDarkMode ? "#ffffff" : "#ffffff",
    todayTextColor: isDarkMode ? "#00adf5" : "#00adf5",
    dayTextColor: isDarkMode ? "#d9e1e8" : "#2d4150",
    textDisabledColor: isDarkMode ? "#525c69" : "#d9e1e8",
    dotColor: isDarkMode ? "#00adf5" : "#00adf5",
    selectedDotColor: isDarkMode ? "#ffffff" : "#ffffff",
    arrowColor: isDarkMode ? "orange" : "blue",
    disabledArrowColor: isDarkMode ? "#d9e1e8" : "#d9e1e8",
    monthTextColor: isDarkMode ? "#b6c1cd" : "#b6c1cd",
    indicatorColor: isDarkMode ? "blue" : "red",
    borderWidth: 1,
    borderColor: 'black',
    'stylesheet.day.multiDot': {
      dot: {
        width: 10,
        height: 10,
        marginTop: 1,
        marginHorizontal: 1,
        borderRadius: 5,
      },
      // If you have multiple dots and want to adjust the space between them, you can use this:
      dotContainer: {
        marginHorizontal: 2,
      },
    },
    // ... other styling properties
  }
  const filteredMarkedDates = getFilteredMarkedDates(markedDates, selectedType);
  //console.log("selectedType", selectedType, incomeType);
  const incomeDisabled =
    selectedType === "income" &&
    ((incomeType === "hourly" && (!hourlyIncome || !interval)) ||
      (incomeType === "one_time" && (!oneTimeExpense || !amount)));

  //console.log("incomeDisabled", incomeDisabled, selectedIndex, hourlyIncome, interval, incomeType);
  const addButtonDisabled =
    Object.keys(selectedDay).length === 0 ||
    !selectedType ||
    (selectedType === "income" && incomeDisabled) ||
    (selectedType === "expense" && (!oneTimeExpense || !amount));
  //console.log("addButtonsDisabled", addButtonDisabled)
  
 console.log("tehem ", theme, isDarkMode)
  return (
    <ScrollView style={styles.container}>
      <ButtonSwitch
        currentTheme={currentTheme}
        buttons={buttons}
        multiple={false}
        selectedIndices={selectedIndex}
        setSelectedIndices={setSelectedIndex}
      />
      {selectedDay && filteredMarkedDates[selectedDay.dateString]?.dots && (
        <EventsForSelectedDay
          currentTheme={currentTheme}
          selectedDay={selectedDay}
          dayEvents={filteredMarkedDates[selectedDay.dateString]?.dots}
          categories={categories}
          intervals={intervals}
          deleteEvent={deleteEvent}
          getHourMinutes={getHourMinutes}
          styles={styles} // if `styles` is not global, you should pass it through
        />
      )}
      <Calendar
        markedDates={filteredMarkedDates}
        markingType={"multi-dot"}
        onDayPress={handleDayPress}
        onMonthChange={clearSelections}
        theme={calendarTheme}
      />
      {(Object.keys(selectedDay).length === 0 && (
        <Text style={styles.chooseADayText}>Select a day</Text>
      )) || <Text style={styles.addEventText}>Event to add details</Text>}
      {Object.keys(selectedDay).length > 0 && (
        <EventAdd
          currentTheme={currentTheme}
          styles={styles}
          chosenTypes={chosenTypes}
          hourlyIncome={hourlyIncome}
          oneTimeIncome={oneTimeIncome}
          setOneTimeIncome={setOneTimeIncome}
          oneTimeExpense={oneTimeExpense}
          setOneTimeExpense={setOneTimeExpense}
          categories={categories}
          setHourlyIncome={setHourlyIncome}
          selectedType={selectedType}
          incomeType={incomeType}
          setIncomeType={setIncomeType}
          intervals={intervals}
          interval={interval}
          setInterval={setInterval}
          getHourMinutes={getHourMinutes}
          amount={amount}
          setAmount={setAmount}
          note={note}
          setNote={setNote}
          addEvent={addEvent}
          addButtonDisabled={addButtonDisabled}
          selectedDay={selectedDay}

        />
      )}
    </ScrollView>
  );
};



export default CalendarScreen;
