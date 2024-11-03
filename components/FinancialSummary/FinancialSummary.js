import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { calculateTotal } from "../../util/math";
import { getTypeArrayKey } from "../../util/budgeter_util";
import { useCustomStyles } from "../../hooks/use-custom-style";

const FinancialSummaryTable = (props) => {
  const { events, hourlyIncomes, oneTimeExpenses, oneTimeIncomes, intervals, currentTheme= {}, translation, language, styles } =
    props;
  // Aggregate data by month/year.
  const customStyles = useCustomStyles();
  const aggregatedData = {};
  
  events.forEach((event) => {
    //e.log("evemt", event);
    const { event_type_key, date, interval_id, type, amount } = event;
    const eventDate = new Date(date);
    const key = `${eventDate.getMonth() + 1}/${eventDate.getFullYear()}`;

    const typeKey = getTypeArrayKey(event_type_key);
    //console.log("typeKe ", event_type_key, typeKey);
    const items = props[typeKey];
    const item = items.find((i) => i.id == event[event_type_key]);
    //console.log("item ", item);
    const intervalItem =
      (event_type_key === "hourly_income_id" &&
        intervals.find((i) => i.id === interval_id)) ||
      {};

    if (!aggregatedData[key]) {
      aggregatedData[key] = {
        monthYear: key,
        income: 0,
        expense: 0,
      };
    }

    const total =
      (event.type === "income" &&
        intervalItem.startTime &&
        intervalItem.endTime &&
        item?.rate &&
        calculateTotal(
          intervalItem.startTime,
          intervalItem.endTime,
          item.rate
        )) ||
      amount ||
      0;
    //console.log("event.tyo ", type, item, total);
    aggregatedData[key][type] += total;
  });

  // Calculate totals and prepare the data for rendering.
  let totalIncome = 0;
  let totalExpense = 0;

  const rows = Object.values(aggregatedData).map((entry) => {
    totalIncome += entry.income;
    totalExpense += entry.expense;

    return {
      ...entry,
      total: entry.income - entry.expense,
    };
  });
  //   console.log("row", rows.length);
  //   console.log("aggregatedData", aggregatedData);

  // Add the total row at the beginning.
  rows.unshift({
    monthYear: translation["Total"],
    income: totalIncome,
    expense: totalExpense,
    total: totalIncome - totalExpense,
  });
  const parseMonthYear = (str) => {
    const [month, year] = str.split("/");
    return new Date(year, month - 1); // months are 0-indexed in JavaScript Date
  };
  //console.log("rows", rows);
  // Render the table.
  return (
    <View style={styles.table}>
      {/* Table header */}
      <View style={styles.tableHeaderRow}>
        <Text style={styles.tableHeader}>{translation["Month/Year"]}</Text>
        <Text style={styles.tableHeader}>{translation["Income"]}</Text>
        <Text style={styles.tableHeader}>{translation["Expense"]}</Text>
        <Text style={styles.tableHeader}>{translation["Total"]}</Text>
      </View>

      {/* Table rows */}
      {rows
        .sort((a, b) => {
          const dateA = parseMonthYear(a.monthYear);
          const dateB = parseMonthYear(b.monthYear);
          return dateA - dateB;
        })
        .map((row, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{row.monthYear}</Text>
            <Text style={styles.tableCell}>{Math.round(row.income)}</Text>
            <Text style={styles.tableCell}>{Math.round(row.expense)}</Text>
            <Text
              style={[
                styles.tableCell,
                row.total >= 0 ? styles.positiveTotal : styles.negativeTotal,
              ]}
            >
              {Math.round(row.total)}
            </Text>
          </View>
        ))}
    </View>
  );
};



export default FinancialSummaryTable;
