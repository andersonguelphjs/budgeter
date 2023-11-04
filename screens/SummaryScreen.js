import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import MonthYearPicker from "../components/MonthYearPicker/MonthYearPicker";
import { AppContext } from "../store/app-context";
import { convertToCalendarEvents } from "../util/dates";
import { Alert } from "react-native";
import Button from "../components/ui/Button";
import FinancialSummaryTable from "../components/FinancialSummary/FinancialSummary";
import ButtonSwitch from "../components/ui/ButtonSwitch";

const SummaryScreen = ({ navigation }) => {
  const [startYear, setStartYear] = useState(new Date().getFullYear());
  const [startMonth, setStartMonth] = useState(new Date().getMonth() + 1);
  const [endYear, setEndYear] = useState(new Date().getFullYear());
  const [endMonth, setEndMonth] = useState(new Date().getMonth() + 1);
  const [markedDates, setMarkedDates] = useState({}); // months are 0-based in JavaScript
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const buttons = [
    { title: "Last", onPress: () => console.log("Button 1 pressed") },
    { title: "Current", onPress: () => console.log("Button 2 pressed") },
    // ... other buttons
  ];
  const ctx = useContext(AppContext);
  const { intervals, events, categories } = ctx.state;

  const { hourlyIncomes, oneTimeIncomes, oneTimeExpenses } = categories;
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
    const newMarkedDates = convertToCalendarEvents({
      events: events,
      categories: categories,
    });
    //console.log("newMarkedDates ", Object.keys(newMarkedDates).length)
    if (events) setMarkedDates(newMarkedDates);
    //performDBReinit()
    //fetchEventSchema()
  }, [events]);

  useEffect(() => {
    if (startMonth && startYear && endMonth && endYear) checkDateRange();
  }, [startMonth, startYear, endMonth, endYear]);
  const monthChangedHandler = (itemValue) => {
    setStartMonth(itemValue);
  };
  const yearChangedHandler = (itemValue) => {
    setStartYear(itemValue);
  };
  // Handlers for end date
  const endMonthChangedHandler = (itemValue) => {
    setEndMonth(itemValue);
  };

  const endYearChangedHandler = (itemValue) => {
    setEndYear(itemValue);
  };
  const checkDateRange = () => {
    // Create Date objects from the years and months
    const startDate = new Date(startYear, startMonth - 1); // months are 0-based in JavaScript Date objects
    const endDate = new Date(endYear, endMonth - 1);
    console.log(startDate, endDate, endDate < startDate);
    // Compare the Date objects
    if (endDate < startDate) {
      Alert.alert(
        "Invalid Date Range",
        "The end date must not be before the start date."
      );
      // Reset the end date to the start date if it's invalid
      setEndYear(startYear);
      setEndMonth(startMonth);
    }
  };
  const filterEvents = (startDate, endDate) => {
    console.log("filterEvents ", startDate, endDate);
    const filtered = events.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate >= startDate && eventDate <= endDate;
    });

    setFilteredEvents(filtered);
  };

  // Handler functions for each button.
  const handleLastMonth = () => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setMonth(endDate.getMonth() - 1);

    filterEvents(startDate, endDate);
  };

  const handleLastQuarter = () => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setMonth(endDate.getMonth() - 3);

    filterEvents(startDate, endDate);
  };

  const handleLastHalfYear = () => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setMonth(endDate.getMonth() - 6);

    filterEvents(startDate, endDate);
  };

  const handleLastYear = () => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setFullYear(endDate.getFullYear() - 1);

    filterEvents(startDate, endDate);
  };

  const handleThisMonth = () => {
    const startDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      1
    );
    const endDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      0
    );

    filterEvents(startDate, endDate);
  };

  const handleThisQuarter = () => {
    const startMonth = Math.floor(new Date().getMonth() / 3) * 3;
    const startDate = new Date(new Date().getFullYear(), startMonth, 1);
    const endDate = new Date(new Date().getFullYear(), startMonth + 3, 0);

    filterEvents(startDate, endDate);
  };

  const handleThisHalfYear = () => {
    const startMonth = Math.floor(new Date().getMonth() / 6) * 6;
    const startDate = new Date(new Date().getFullYear(), startMonth, 1);
    const endDate = new Date(new Date().getFullYear(), startMonth + 6, 0);

    filterEvents(startDate, endDate);
  };

  const handleThisYear = () => {
    const startDate = new Date(new Date().getFullYear(), 0, 1);
    const endDate = new Date(new Date().getFullYear(), 12, 0);

    filterEvents(startDate, endDate);
  };

  console.log("Summary", events.length, selectedIndex);
  console.log("feilter ", filteredEvents.length);
  return (
    <ScrollView style={{ flex: 1 }}>
      <MonthYearPicker
        markedDates={markedDates}
        selectedMonth={startMonth}
        selectedYear={startYear}
        yearChangedHandler={yearChangedHandler}
        monthChangedHandler={monthChangedHandler}
      />
      <MonthYearPicker
        markedDates={markedDates}
        selectedMonth={endMonth}
        selectedYear={endYear}
        yearChangedHandler={endYearChangedHandler}
        monthChangedHandler={endMonthChangedHandler}
      />
      <View>
        <Button
          onPress={() =>
            filterEvents(
              new Date(startYear, startMonth - 1, 1),
              new Date(endYear, endMonth, 0)
            )
          }
          shape="pill"
          backgroundColor="#000"
        >
          Filter By date range above
        </Button>
        <ButtonSwitch
          buttons={buttons}
          multiple={false}
          selectedIndices={selectedIndex}
          setSelectedIndices={setSelectedIndex}
        />
        <View style={styles.buttonContainer}>
          <Button
            tshape="pill"
            onPress={selectedIndex === 1 ? handleLastMonth : handleThisMonth}
          >
            1 mo
          </Button>
          <Button
            shape="pill"
            onPress={
              selectedIndex === 1 ? handleLastQuarter : handleThisQuarter
            }
          >
            3 mo
          </Button>
          <Button
            shape="pill"
            onPress={
              selectedIndex === 1 ? handleLastHalfYear : handleThisHalfYear
            }
          >
            6 mo
          </Button>
          <Button
            shape="pill"
            onPress={selectedIndex === 1 ? handleLastYear : handleThisYear}
          >
            12 mo
          </Button>
        </View>
      </View>

      {hourlyIncomes && intervals && oneTimeExpenses && oneTimeIncomes && (
        <FinancialSummaryTable
          events={filteredEvents}
          oneTimeExpenses={oneTimeExpenses}
          oneTimeIncomes={oneTimeIncomes}
          hourlyIncomes={hourlyIncomes}
          intervals={intervals}
        />
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default SummaryScreen;
