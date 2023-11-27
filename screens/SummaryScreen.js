import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import MonthYearPicker from "../components/MonthYearPicker/MonthYearPicker";
import { AppContext } from "../store/app-context";
import { convertToCalendarEvents, getDateWithOffset } from "../util/dates";
import { Alert } from "react-native";
import Button from "../components/ui/Button";
import FinancialSummaryTable from "../components/FinancialSummary/FinancialSummary";
import ButtonSwitch from "../components/ui/ButtonSwitch";

const SummaryScreen = ({ navigation }) => {
  const [startYear, setStartYear] = useState(new Date().getFullYear());
  const [startMonth, setStartMonth] = useState(getDateWithOffset(new Date(),-3).getMonth());
  const [startDay, setStartDay] = useState(new Date().getDate());
  const [endYear, setEndYear] = useState(new Date().getFullYear());
  const [endMonth, setEndMonth] = useState(new Date().getMonth());
  const [endDay, setEndDay] = useState(new Date().getDate());
  const [markedDates, setMarkedDates] = useState({}); // months are 0-based in JavaScript
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeButton, setActiveButton] = useState("3mo");

  const buttons = [
    { title: "Last", onPress: () => console.log("Button 1 pressed") },
    { title: "Current", onPress: () => console.log("Button 2 pressed") },
    // ... other buttons
  ];
  const ctx = useContext(AppContext);
  const { state, dispatch, playSoundFile, translation, tables } = ctx;
  const { intervals, events, categories, themes, settings } = state;
  const { hourlyIncomes, oneTimeIncomes, oneTimeExpenses } = categories;
  const { event_table } = tables;
  const { sound, theme, notifications, currency, id, language } = settings;

  const currentTheme = themes[theme] || themes["LIGHT"];
  const activeColor = currentTheme.background;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentTheme.background,
      color: currentTheme.text,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
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

  useEffect(() => {
    checkDateRange(startDay, startMonth, startYear, endDay, endMonth, endYear);
  }, [startDay, startMonth, startYear, endDay, endMonth, endYear]);
  const startMonthChangedHandler = (itemValue) => {
    console.log("startMonthChanged" , itemValue);
    setActiveButton("custom")
    setStartMonth(itemValue);
  };
  const startYearChangedHandler = (itemValue) => {
    console.log("startyChanged" , itemValue);
    setActiveButton("custom")
    setStartYear(itemValue);
  };
  // Handlers for end date
  const endMonthChangedHandler = (itemValue) => {
    console.log("eMonthChanged" , itemValue);
    setActiveButton("custom")
    setEndMonth(itemValue);
  };

  const endYearChangedHandler = (itemValue) => {
    console.log("eyChanged" , itemValue);
    setActiveButton("custom")
    setEndYear(itemValue);
  };

  const getDateFromDayMonthYear = (day, month, year) => {
    return new Date(year, month, day)
  }
  const checkDateRange = (startDay, startMonth, startYear, endDay, endMonth, endYear) => {
    // Create Date objects from the years, months, and days
    console.log(startYear, startMonth, startDay)
    const startDate = new Date(startYear, startMonth, startDay);
    let endDate = new Date(endYear, endMonth, endDay);
  
    console.log("checkDateRange", startDate, endDate, endDate < startDate);
  
    // Compare the Date objects
    if (endDate < startDate) {
      // Alert.alert(
      //   "Invalid Date Range",
      //   "The end date must not be before the start date."
      // );
      // Reset the end date to the start date if it's invalid
      endDate = new Date(startYear, startMonth, startDay);
      setEndYear(startYear);
      setEndMonth(startMonth);
      setEndDay(startDay);
    }
    filterEvents(startDate, endDate)

  };
  const filterEvents = (startDate, endDate) => {
    console.log("filterEvents", startDate, endDate);
    let filtered;
  
    if (!startDate || !endDate) {
      // Case when no dates are provided
      // Get the earliest and latest dates from the events
      const dates = events.map(event => new Date(event.date));
      const earliestDate = new Date(Math.min(...dates));
      const latestDate = new Date(Math.max(...dates));
  
      // Update the state
      setStartYear(earliestDate.getFullYear());
      setStartMonth(earliestDate.getMonth());
      setStartDay(earliestDate.getDate());
      setEndYear(latestDate.getFullYear());
      setEndMonth(latestDate.getMonth());
      setEndDay(latestDate.getDate());
  
      // Consider all events
      filtered = events;
    } else {
      // Filter events based on provided dates
      filtered = events.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate >= startDate && eventDate <= endDate;
      });
    }
  
    setFilteredEvents(filtered);
  };
  
  const updateDateStatesAndFilterEvents = (increment, activeButtonLabel) => {
    const endDate = new Date();
    const startDate = getDateWithOffset(endDate, increment);
  
    setStartYear(startDate.getFullYear());
    setStartMonth(startDate.getMonth());
    setStartDay(startDate.getDate());
  
    setEndYear(endDate.getFullYear());
    setEndMonth(endDate.getMonth());
    setEndDay(endDate.getDate());
  
    setActiveButton(activeButtonLabel);
    filterEvents(startDate, endDate);
  };
  
  // Handler functions for each button.
  // const handleLastMonth = () => {
  //   const endDate = new Date();
  //   const startDate = new Date();
  //   startDate.setMonth(endDate.getMonth() - 1);

  //   filterEvents(startDate, endDate);
  // };

  // const handleLastQuarter = () => {
  //   const endDate = new Date();
  //   const startDate = new Date();
  //   startDate.setMonth(endDate.getMonth() - 3);
  //   setActiveButton("3mo");
  //   filterEvents(startDate, endDate);
  // };

  // const handleLastHalfYear = () => {
  //   const endDate = new Date();
  //   const startDate = new Date();
  //   startDate.setMonth(endDate.getMonth() - 6);
  //   setActiveButton("6mo");
  //   filterEvents(startDate, endDate);
  // };

  // const handleLastYear = () => {
  //   const endDate = new Date();
  //   const startDate = new Date();
  //   startDate.setFullYear(endDate.getFullYear() - 1);
  //   setActiveButton("12mo");
  //   filterEvents(startDate, endDate);
  // };

  // const handleThisMonth = () => {
  //   const startDate = new Date(
  //     new Date().getFullYear(),
  //     new Date().getMonth(),
  //     1
  //   );
  //   const endDate = new Date(
  //     new Date().getFullYear(),
  //     new Date().getMonth() + 1,
  //     0
  //   );

  //   filterEvents(startDate, endDate);
  // };

  // const handleThisQuarter = () => {
  //   const startMonth = Math.floor(new Date().getMonth() / 3) * 3;
  //   const startDate = new Date(new Date().getFullYear(), startMonth, 1);
  //   const endDate = new Date(new Date().getFullYear(), startMonth + 3, 0);
  //   setActiveButton("3mo");
  //   filterEvents(startDate, endDate);
  // };

  // const handleThisHalfYear = () => {
  //   const startMonth = Math.floor(new Date().getMonth() / 6) * 6;
  //   const startDate = new Date(new Date().getFullYear(), startMonth, 1);
  //   const endDate = new Date(new Date().getFullYear(), startMonth + 6, 0);
  //   setActiveButton("6mo");
  //   filterEvents(startDate, endDate);
  // };

  // const handleThisYear = () => {
  //   const startDate = new Date(new Date().getFullYear(), 0, 1);
  //   const endDate = new Date(new Date().getFullYear(), 12, 0);
  //   setActiveButton("12mo");
  //   filterEvents(startDate, endDate);
  // };

  const handleAll = () => {
    setActiveButton("all");
    filterEvents();
  };

  //console.log("Summary", events.length, selectedIndex);
 // console.log("feilter ", filteredEvents.length);
 console.log("activeColor ", activeColor)
  return (
    <ScrollView style={{ flex: 1 }}>
      {/* <Button
        onPress={() =>
          filterEvents(
            new Date(startYear, startMonth - 1, 1),
            new Date(endYear, endMonth, 0)
          )
        }
        shape="pill"
        backgroundColor={currentTheme.button}
        textStyle={{ color: currentTheme.text }}
        buttonStyle={{ width: "100%", borderWidth: 1, borderColor: "black" }}
      >
        Filter by date range
      </Button> */}
      <MonthYearPicker
        markedDates={markedDates}
        selectedMonth={startMonth}
        selectedYear={startYear}
        selectedDay={startDay}
        yearChangedHandler={startYearChangedHandler}
        monthChangedHandler={startMonthChangedHandler}
        includeDay={true}
      />
      <MonthYearPicker
        markedDates={markedDates}
        selectedMonth={endMonth}
        selectedYear={endYear}
        selectedDay={endDay}
        yearChangedHandler={endYearChangedHandler}
        monthChangedHandler={endMonthChangedHandler}
        includeDay={true}
      />
      <View>
        {/* <ButtonSwitch
          currentTheme={currentTheme}
          buttons={buttons}
          multiple={false}
          selectedIndices={selectedIndex}
          setSelectedIndices={setSelectedIndex}
        /> */}
        <View style={styles.buttonContainer}>
          {/* <Button
            shape="pill"
            onPress={selectedIndex === 1 ? handleLastMonth : handleThisMonth}
            backgroundColor={currentTheme.button}
            textStyle={{ color: currentTheme.text }}
            buttonStyle={{ borderWidth: 1, borderColor: "black" }}
          >
            1 mo
          </Button> */}
          <Button
            shape="pill"
            onPress={()=> updateDateStatesAndFilterEvents(-3, "3mo")
            }
            backgroundColor={activeButton === "3mo" ? activeColor : currentTheme.button}
            textStyle={{ color: currentTheme.text }}
            buttonStyle={{ borderWidth: 1, borderColor: "black" }}
          >
            3 mo
          </Button>
          <Button
            shape="pill"
            onPress={()=> updateDateStatesAndFilterEvents(-6, "6mo")}
            backgroundColor={activeButton === "6mo" ? activeColor : currentTheme.button}
            textStyle={{ color: currentTheme.text }}
            buttonStyle={{ borderWidth: 1, borderColor: "black" }}
          >
            6 mo
          </Button>
          <Button
            shape="pill"
            onPress={()=> updateDateStatesAndFilterEvents(-12, "12mo")}
            backgroundColor={activeButton === "12mo" ? activeColor : currentTheme.button}
            textStyle={{ color: currentTheme.text }}
            buttonStyle={{ borderWidth: 1, borderColor: "black" }}
          >
            12 mo
          </Button>
          <Button
            shape="pill"
            onPress={handleAll}
            backgroundColor={activeButton === "all" ? activeColor : currentTheme.button}
            textStyle={{ color: currentTheme.text }}
            buttonStyle={{ borderWidth: 1, borderColor: "black" }}
          >
            All
          </Button>
        
        </View>
      </View>

      {hourlyIncomes && intervals && oneTimeExpenses && oneTimeIncomes && (
        <FinancialSummaryTable
          currentTheme={currentTheme}
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

export default SummaryScreen;
