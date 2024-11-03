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
import { Calendar, LocaleConfig } from "react-native-calendars";
import { AppContext } from "../store/app-context";
import { getHourMinutes } from "../util/dates";
import { Ionicons } from "@expo/vector-icons";
import { dynamicStyle } from "../util/text";
import { convertToCalendarEvents, removeSecondsFromISOString } from "../util/dates";
import ExpenseIncomeSwitch from "../components/ExpenseIncomeSwitch/ExpenseIncomeSwitch";
import EventsForSelectedDay from "../components/EventsForSelectedDay/EventsForSelectedDay";
import EventAdd from "../components/EventAdd/EventAdd";
import ButtonSwitch from "../components/ui/ButtonSwitch";
import { getFilteredMarkedDates } from "../util/budgeter_util";
import text from "../assets/language/text.json";
import { getCalendarScreenStyles } from "../styles/screenStyles";
import ConfirmationModal from "../components/ui/ConfirmationModal";
import CalendarComponent from "../components/CalendarComponent/CalendarComponent";

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
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteConfig, setDeleteConfig] = useState({});
  const [eventAddedMsg, setEventAddedMsg] = useState("");

  // Retrieving HourlyIncomes and intervals from context
  const ctx = useContext(AppContext);
  const { dispatch, playSoundFile, state, tables } = ctx;
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

  const styles = getCalendarScreenStyles(currentTheme);
  const translation = text[language];
  const buttons = [
    {
      title: translation["expense"],
      onPress: () => {
        setSelectedType("expense");
        setHourlyIncome(null);
        setOneTimeIncome(null);
        setOneTimeExpense(null);
        setAmount(0);
        setNote("");
      },
    },
    {
      title: translation["income"],
      onPress: () => {
        setSelectedType("income");
        setHourlyIncome(null);
        setOneTimeIncome(null);
        setOneTimeExpense(null);
        setAmount(0);
        setNote("");
      },
    },
  ];
  useEffect(() => {
    const newMarkedDates = convertToCalendarEvents({
      events: events,
      categories: categories,
    });

    if (events) setMarkedDates(newMarkedDates);
  }, [events]);

  useEffect(() => {

    if (eventAddedMsg) setTimeout(() => {setEventAddedMsg("")},5000)

  },[eventAddedMsg]);

  const chosenTypes =
    selectedType === "expenses"
      ? oneTimeExpenses
      : hourlyIncomes.concat(oneTimeIncomes);

  const confirmDeleteEvent = async () => {
    // const newItems = intervals.filter((_, i) => i !== index);
    // const result = await deleteIntervalRow(intervals[index].id);
    // console.log("interval delete result ",result)
    const { dateString } = deleteConfig?.day;
    const { key, id } = deleteConfig;
    console.log("dateString ", dateString, key, id);
    const result = await event_table.deleteRow(id);
    console.log("result ", result);
    const count = await event_table.getRowCount();
    console.log("count", count);

    console.log("Events", events.length);
    const newEvents = events.filter((i) => i.id !== id);
    console.log("newEvents", newEvents.length);
    dispatch({ type: "UPDATE_EVENTS", events: newEvents });
    setDeleteConfig({});
    setModalVisible(false);
  };

  const deleteEvent = (config) => {
    console.log("deleteEvent ", config);
    setDeleteConfig(config);
    setModalVisible(true);
    setEventAddedMsg(translation["event_deleted"])
  };
  const startTimeInitValue =
  (selectedType === "income" && incomeType === "hourly" && interval && removeSecondsFromISOString(intervals.find(i => i.id === interval).startTime)) ||
  null;
  const endTimeInitValue =
  (selectedType === "income" && incomeType === "hourly" && interval && removeSecondsFromISOString(intervals.find(i => i.id === interval).endTime)) ||
  null;
 console.log("hourlyINcom ", hourlyIncome, interval, startTimeInitValue, endTimeInitValue)

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
    const startTime = _interval_id && intervals.find(i => i.id === _interval_id).startTime && new Date(_interval_id && intervals.find(i => i.id === _interval_id).startTime).toISOString() || null;
    const endTime = _interval_id && intervals.find(i => i.id === _interval_id).endTime && new Date(_interval_id && intervals.find(i => i.id === _interval_id).endTime).toISOString() || null;
    console.log("startTime: ", typeof startTime)
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

    const eventToAdd = {
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
      startTime : startTime,
      endTime : endTime,
    };

    const result = await event_table.createNewRow(eventToAdd);

    eventToAdd.id = result;
    const count = await event_table.getRowCount();
    playSoundFile(null, 2);
    const newEvents = [...events, eventToAdd];
    dispatch({
      type: "UPDATE_EVENTS",
      events: newEvents,
    });
    setEventAddedMsg(translation["event_added"]);
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

  const filteredMarkedDates = getFilteredMarkedDates(markedDates, selectedType);
  console.log("selectedType", selectedType, incomeType, oneTimeExpense, amount);
  const incomeDisabled =
    selectedType === "income" &&
    ((incomeType === "hourly" && (!hourlyIncome || !interval)) ||
      (incomeType === "one_time" && (!oneTimeIncome || !amount)));

  //console.log("incomeDisabled", incomeDisabled, selectedIndex, hourlyIncome, interval, incomeType);
  const addButtonDisabled =
    Object.keys(selectedDay).length === 0 ||
    !selectedType ||
    (selectedType === "income" && incomeDisabled) ||
    (selectedType === "expense" && (!oneTimeExpense || !amount));
  //console.log("addButtonsDisabled", addButtonDisabled)
  const selectedDayEvents = selectedDay &&
    filteredMarkedDates[selectedDay.dateString]?.dots && (
      <EventsForSelectedDay
        currentTheme={currentTheme}
        selectedDay={selectedDay}
        dayEvents={filteredMarkedDates[selectedDay.dateString]?.dots}
        categories={categories}
        intervals={intervals}
        deleteEvent={deleteEvent}
        getHourMinutes={getHourMinutes}
        styles={styles}
        event_table={event_table}
        dispatch={dispatch}
        translation={translation}
      />
    );

  const addEventCard = Object.keys(selectedDay).length > 0 && (
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
      translation={translation}
      eventAddedMsg={eventAddedMsg}
    />
  );
  return (
    <ScrollView style={styles.container}>
      <ButtonSwitch
        currentTheme={currentTheme}
        buttons={buttons}
        multiple={false}
        selectedIndices={selectedIndex}
        setSelectedIndices={setSelectedIndex}
      />
      <CalendarComponent
        darkMode={theme === "DARK"}
        currentLocale={language}
        markedDates={filteredMarkedDates}
        markingType={"multi-dot"}
        onDayPress={handleDayPress}
        onMonthChange={clearSelections}
      />
      {selectedDayEvents}
      {addEventCard}
      <ConfirmationModal
        modalVisible={modalVisible}
        onConfirm={confirmDeleteEvent}
        onCancel={() => setModalVisible(false)}
        confirmText={translation["confirm"]}
        cancelText={translation["cancel"]}
        message={translation["delete_event"]}
      />
    </ScrollView>
  );
};

export default CalendarScreen;
