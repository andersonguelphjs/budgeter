import React, { useContext, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import RNPickerSelect from "react-native-picker-select";
import { useCustomStyles } from "../../hooks/use-custom-style";
import { AppContext } from "../../store/app-context";
import { Ionicons } from "@expo/vector-icons";
import { getDateWithOffset } from "../../util/dates";

const MonthYearPicker = ({
  markedDates,
  selectedDay,
  selectedMonth,
  selectedYear,
  monthChangedHandler,
  yearChangedHandler,
  includeDay = false,
}) => {
  const customStyles = useCustomStyles();
  const years = Object.keys(markedDates || {})
    .map((date) => {
      const year = date.split("-")[0];
      return parseInt(year, 10);
    })
    .filter((year, index, self) => self.indexOf(year) === index) // unique years
    .sort();

  const months = Array.from({ length: 12 }, (_, i) => i + 1); // Months 1-12
  const [currentDate, setCurrentDate] = useState(new Date());

  const changeMonth = (increment) => {
    console.log("increment", increment);
  
    // Use getDateWithOffset to calculate the new date
    let newDate = getDateWithOffset(currentDate, increment);
  
    console.log("newDate", newDate);
  
    // Set the new date
    // setCurrentDate(newDate); // Uncomment this if you want to update the state
    monthChangedHandler(newDate.getMonth());
    yearChangedHandler(newDate.getFullYear());
  };
  

  const dateFormat = includeDay
    ? { month: "long", day: "numeric", year: "numeric" }
    : { month: "long", year: "numeric" };

    useEffect(() => {
      let day = includeDay ? selectedDay || currentDate.getDate() : currentDate.getDate();
      let month = selectedMonth !== undefined ? selectedMonth : currentDate.getMonth();
      let year = selectedYear !== undefined ? selectedYear : currentDate.getFullYear();
      console.log("useEffect " , selectedDay, day, month, year);
      const newDate = new Date(year, month, day);
      
      // Adjust for invalid days (like November 31st)
      while (newDate.getMonth() !== month) {
        newDate.setDate(newDate.getDate() - 1);
      }
  
      setCurrentDate(newDate);
    }, [selectedDay, selectedMonth, selectedYear, selectedDay, includeDay]);
  return (
    <View style={styles.pickerContainer}>
      {/* Month Picker */}
      <View style={styles.monthContainer}>
        <TouchableOpacity onPress={() => changeMonth(-1)}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.monthText}>
          {currentDate.toLocaleDateString("default", dateFormat)}
        </Text>
        <TouchableOpacity onPress={() => changeMonth(1)}>
          <Ionicons name="arrow-forward" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  monthContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // Add additional styling to match your theme
  },
  monthText: {
    fontSize: 20,
    // Add additional styling as needed
  },
});

export default MonthYearPicker;
