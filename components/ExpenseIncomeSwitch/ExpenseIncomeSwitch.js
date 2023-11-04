import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

const ExpenseIncomeSwitch = ({ selectedType, switchHandler }) => {
  const getTextStyle = (type) => ({
    ...styles.label,
    fontWeight: selectedType === type ? "bold" : "normal",
  });

  return (
    <View style={styles.switchContainer}>
      <Text style={getTextStyle("expense")}>Expenses</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={selectedType === "expense" ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={switchHandler}
        value={selectedType === "income"}
      />
      <Text style={getTextStyle("income")}>Income</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10, // add some margin at the top and bottom if needed
  },
  label: {
    marginHorizontal: 8, // changed from margin to marginHorizontal for specificity
  },
});

export default ExpenseIncomeSwitch;
