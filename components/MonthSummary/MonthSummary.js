import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Calendar } from "react-native-calendars";
import { AppContext } from "../../store/app-context";
import MonthTable from "../MonthTable/MonthTable";
import { getHourMinutes } from "../../util/dates";
import MyPieChart from "../MyPieChart/MyPieChart";
import MonthYearPicker from "../MonthYearPicker/MonthYearPicker";
import { calculateTotal } from "../../util/math";
import { getTypeArrayKey } from "../../util/budgeter_util";
const MonthSummary = ({ markedDates, selectedType }) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // months are 0-based in JavaScript
  const [extractedData, setExtractedData] = useState(null);
  const ctx = useContext(AppContext);
  const { intervals, events, categories,themes, settings } = ctx.state;
  const { hourlyIncomes, oneTimeIncomes, oneTimeExpenses } = categories;
  const { sound, theme, notifications, currency, id, language } = settings;
  const currentTheme = themes[theme] || themes["LIGHT"];
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    chartContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: 20,
    },
  });
  useEffect(() => {
    if (!markedDates) {
      setExtractedData("No data");
      return;
    }
    // Assuming markedDates is your original object, and selectedYear and selectedMonth are previously defined
    const flattenMarkedDatesForTable = (config) => {
      // Step 1: Filter the data based on the selected year and month
      const {
        markedDates,
        selectedYear,
        selectedMonth,
        selectedType,
        categories,
        intervals,
      } = config;
      const { hourlyIncomes, oneTimeIncomes, oneTimeExpenses } = categories;
      // console.log("markedDates ", selectedYear, selectedMonth)
      const relevantData = Object.entries(markedDates).filter(([date]) => {
        const [year, month] = date.split("-");
        return (
          parseInt(year, 10) === selectedYear &&
          parseInt(month, 10) === selectedMonth
        );
      });
      // console.log("flattenMarkedDatesForTable selectedtype", selectedType)
      // console.log("relevantData", relevantData.length)
      // Step 2: Create a new array to hold the flattened objects
      const flattenedData = [];

      // Step 3: Iterate through the relevant data, accessing each "dots" array
      relevantData.forEach(([date, info]) => {
        // console.log("date", date)
        // console.log("info", info)

        if (info.dots && info.dots.length > 0) {
          // For each object in "dots", create a new object in the flattened structure
          info.dots.forEach((dot) => {
            // Construct a new object. You can decide which fields you want to include
            console.log("dot", dot);
            const { event_type_key } = dot;
            const typeKey = getTypeArrayKey(event_type_key);
            // console.log("typeKe ", event_type_key, typeKey)
            const items = categories[typeKey];
            const item = items.find((i) => i.id == dot[event_type_key]);
            // console.log("item ", item)
            const intervalItem =
              (event_type_key === "hourly_income_id" &&
                intervals.find((i) => i.id === dot.interval_id)) ||
              {};

            const flattenedObject = {
              dateString: dot.day.dateString,
              day: dot.day.day,
              month: dot.day.month,
              timestamp: dot.day.timestamp,
              year: dot.day.year,
              amount: dot.amount,
              category_id: item.id || null,
              category_type: item.type || "",
              category_color: item.color || "",
              category_description: item.description || "",
              category_rate: item.rate || dot.amount,
              category_amount: dot.amount,
              note: dot.note,
              type: dot.type,
              interval_id: dot.interval_id || null,
              interval_startTime:
                (intervalItem?.startTime &&
                  getHourMinutes(intervalItem.startTime)) ||
                "N/A",
              interval_endTime:
                (intervalItem?.endTime &&
                  getHourMinutes(intervalItem.endTime)) ||
                "N/A",
              key: dot.key,
              total:
                (selectedType === "income" &&
                  intervalItem.startTime &&
                  intervalItem.endTime &&
                  item?.rate &&
                  calculateTotal(
                    intervalItem.startTime,
                    intervalItem.endTime,
                    item.rate
                  )) ||
                dot.amount ||
                0,
              // ... any other fields you need from each "dot"
            };

            // Add the new object to the flattenedData array
            flattenedData.push(flattenedObject);
          });
        }
      });

      const sortedFlattenedData = flattenedData.sort((a, b) => {
        // Assuming date is in the format "YYYY-MM-DD"
        return a.dateString.localeCompare(b.dateString); // This compares dates as strings in the "YYYY-MM-DD" format
      });

      // Step 5: Return the sorted flattened data array
      return sortedFlattenedData;
    };

    // Usage: Prepare the data for the table component
    const dataForTable = flattenMarkedDatesForTable({
      markedDates: markedDates,
      selectedYear: selectedYear,
      selectedMonth: selectedMonth,
      selectedType: selectedType,
      categories: categories,
      intervals: intervals,
    });

    setExtractedData(dataForTable);
  }, [selectedYear, selectedMonth, markedDates, selectedType]);

  const extractDataByHeaders = (extractedData, properties) => {
    // Map over the data to transform each object.
    return extractedData.map((item) => {
      // Reduce each object based on the desired properties.
      return properties.reduce((newItem, key) => {
        // Check if the item actually has the key we're extracting.
        if (item.hasOwnProperty(key)) {
          newItem[key] = item[key]; // Assign the value if the key exists.
        } else {
          newItem[key] = "";
        }
        return newItem; // Return the accumulated object.
      }, {});
    });
  };

  const monthChangedHandler = (itemValue) => {
    setSelectedMonth(itemValue);
  };
  const yearChangedHandler = (itemValue) => {
    setSelectedYear(itemValue);
  };
  const properties =
    selectedType === "income"
      ? [
          "dateString",
          "interval_startTime",
          "interval_endTime",
          "category_rate",
          "category_description",
          "total",
        ]
      : ["dateString", "category_description", "amount", "note", "total"];
  const headerText =
    selectedType === "income"
      ? ["Date", "Start", "End", "Amount/Rate", "Description", "Total"]
      : ["Date", "Category", "Amount", "Note", "Total"];

  // console.log(extractedData)
  const data = extractedData && extractDataByHeaders(extractedData, properties);
  // const styleConfig = {
  //   headerBackground: "#4a148c",
  //   headerColor: "#ffffff",
  //   rowBackground: "#f3e5f5",
  //   rowColor: "#4a148c",
  //   borderColor: "#ce93d8",
  // };
  //// console.log(data)
  return (
    <ScrollView style={styles.container}>
      <MonthYearPicker
        markedDates={markedDates}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
        yearChangedHandler={yearChangedHandler}
        monthChangedHandler={monthChangedHandler}
      />
      <View style={styles.chartContainer}>
        {extractedData && <MyPieChart tableData={extractedData} />}
      </View>
      
        {data && (
          <MonthTable
            properties={properties}
            headerText={headerText}
            data={data}
            styleConfig={{}}
          />
        )}

    </ScrollView>
  );
};



export default MonthSummary;
