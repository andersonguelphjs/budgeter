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

const MonthSummary = ({ markedDates, selectedType, translation, styles }) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); // months are 0-based in JavaScript
  const [totalSum, setTotalSum] = useState(0);
  const [flattenedData, setFlattenedData] = useState(null);
  const ctx = useContext(AppContext);
  const { intervals, events, categories, themes, settings } = ctx.state;
  const { hourlyIncomes, oneTimeIncomes, oneTimeExpenses } = categories;
  const { sound, theme, notifications, currency, id, language } = settings;
  const currentTheme = themes[theme] || themes["LIGHT"];

  useEffect(() => {
    if (!markedDates) {
      setFlattenedData("No data");
      return;
    }
    // Assuming markedDates is your original object, and selectedYear and selectedMonth are previously defined
    const flattenMarkedDates = (config) => {
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
      const relevantData = Object.entries(markedDates).filter(([date]) => {
        const [year, month] = date.split("-");
        return (
          parseInt(year, 10) === selectedYear &&
          parseInt(month, 10) === selectedMonth + 1
        );
      });

      const flattenedData = [];

      relevantData.forEach(([date, info]) => {
        if (info.dots && info.dots.length > 0) {
          // For each object in "dots", create a new object in the flattened structure
          info.dots.forEach((dot) => {
            // Construct a new object. You can decide which fields you want to include
            console.log("dot ", dot)
            const { event_type_key } = dot;
            const typeKey = getTypeArrayKey(event_type_key);
            const items = categories[typeKey];
            const item = items.find((i) => i.id == dot[event_type_key]);
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
              // interval_startTime:
              //   (intervalItem?.startTime &&
              //     getHourMinutes(intervalItem.startTime)) ||
              //   "N/A",
              // interval_endTime:
              //   (intervalItem?.endTime &&
              //     getHourMinutes(intervalItem.endTime)) ||
              //   "N/A",
              interval_startTime: dot.startTime || "N/A",
              interval_endTime: dot.endTime || "N/A",
              key: dot.key,
              // total:
              //   (selectedType === "income" &&
              //     intervalItem.startTime &&
              //     intervalItem.endTime &&
              //     item?.rate &&
              //     calculateTotal(
              //       intervalItem.startTime,
              //       intervalItem.endTime,
              //       item.rate
              //     )) ||
              //   dot.amount ||
              //   0,
              total:
                (selectedType === "income" &&
                  dot.startTime &&
                  dot.endTime &&
                  item?.rate &&
                  Math.round(calculateTotal(dot.startTime, dot.endTime, item.rate))) ||
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
    const flattenedMarkedDates = flattenMarkedDates({
      markedDates: markedDates,
      selectedYear: selectedYear,
      selectedMonth: selectedMonth,
      selectedType: selectedType,
      categories: categories,
      intervals: intervals,
    });

    const aggregatedData = {};
    flattenedMarkedDates.forEach((item) => {
      const description = item.category_description;

      if (aggregatedData[description]) {
        // If the description already exists, add the total to the existing amount
        aggregatedData[description].total += item.total;
      } else {
        // If it's a new description, create a new entry in the aggregatedData
        aggregatedData[description] = {
          ...item, // copying other properties like color, etc.
          total: item.total,
        };
      }
    });

    // Now convert the aggregated data back to an array and calculate the sum of all totals
    const aggregatedArray = Object.values(aggregatedData);
    setTotalSum(Math.round(aggregatedArray.reduce((acc, item) => acc + item.total, 0)));
    setFlattenedData(aggregatedArray);
    console.log("aggregated ", aggregatedArray)
  }, [selectedYear, selectedMonth, markedDates, selectedType]);

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
          // "interval_startTime",
          // "interval_endTime",
          "category_rate",
          "category_description",
          "total",
        ]
      : ["dateString", "category_description", "amount", "total", "note"];
  const columnHeaderText =
    selectedType === "income"
      ? [
          translation["Date"],
          translation["Amount_Rate"],
          translation["Description"],
          translation["Total"],
        ]
      : [
          translation["Date"],
          translation["Category"],
          translation["Amount"],
          translation["Total"],
          translation["Note"],
        ];

  return (
    <ScrollView style={styles.container}>
      <MonthYearPicker
        markedDates={markedDates}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
        yearChangedHandler={yearChangedHandler}
        monthChangedHandler={monthChangedHandler}
        translation={translation}
        language={language}
        styles={styles}
      />
      <View style={styles.chartContainer}>
        {flattenedData && (
          <MyPieChart
            aggregatedArray={flattenedData}
            totalSum={totalSum}
            translation={translation}
          />
        )}
      </View>

      {flattenedData && (
        <MonthTable
          properties={properties}
          columnHeaderText={columnHeaderText}
          aggregatedArray={flattenedData}
          styleConfig={{}}
          totalSum={totalSum}
          styles={styles}
        />
      )}
    </ScrollView>
  );
};

export default MonthSummary;
