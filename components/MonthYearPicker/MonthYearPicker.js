import React from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const MonthYearPicker = ({ markedDates, selectedMonth, selectedYear, monthChangedHandler, yearChangedHandler }) => {

  const years = Object.keys(markedDates || {})
    .map((date) => {
      const year = date.split("-")[0];
      return parseInt(year, 10);
    })
    .filter((year, index, self) => self.indexOf(year) === index) // unique years
    .sort();

  const months = Array.from({ length: 12 }, (_, i) => i + 1); // Months 1-12


  return (

      <View style={styles.pickerContainer}>
        {/* Month Picker */}
        <Picker
          selectedValue={selectedMonth}
          onValueChange={(itemValue) => monthChangedHandler(itemValue)}
          mode="dropdown" // This prop is Android-only
          style={styles.picker}
        >
          {months.map((month, index) => (
            <Picker.Item
              label={month.toString().padStart(2, "0")}
              value={month}
              key={index}
            />
          ))}
        </Picker>

        {/* Year Picker */}
        <Picker
          selectedValue={selectedYear}
          onValueChange={(itemValue) => yearChangedHandler(itemValue)}
          mode="dropdown" // This prop is Android-only
          style={styles.picker}
        >
          {years.map((year, index) => (
            <Picker.Item label={year.toString()} value={year} key={index} />
          ))}
        </Picker>
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  picker: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default MonthYearPicker;
