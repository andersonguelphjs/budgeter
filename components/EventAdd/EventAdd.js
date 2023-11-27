import React, { useState } from "react";
import { useCustomStyles } from "../../hooks/use-custom-style";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import ButtonSwitch from "../ui/ButtonSwitch";
import RNPickerSelect from "react-native-picker-select";
const EventAdd = ({
  styles,
  chosenTypes,
  hourlyIncome,
  categories,
  setHourlyIncome,
  oneTimeExpense,
  setOneTimeExpense,
  oneTimeIncome,
  setOneTimeIncome,
  currentTheme = {},
  selectedType,
  incomeType,
  selectedDay,
  setIncomeType,
  intervals,
  interval,
  setInterval,
  getHourMinutes,
  amount,
  setAmount,
  note,
  setNote,
  addEvent,
  addButtonDisabled,
}) => {
  const { hourlyIncomes, oneTimeExpenses, oneTimeIncomes } = categories;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const customStyles = useCustomStyles();
  const buttons = [
    {
      title: "Hourly",
      onPress: () => {
        console.log("Button 1 pressed");
        // additional actions
      },
    },
    {
      title: "One time",
      onPress: () => {
        console.log("Button 2 pressed");
        // additional actions
      },
    },
  ];
  const incomeTypeHandler = (index) => {
    setIncomeType(index == 0 ? "hourly" : "one_time");
    setSelectedIndex(index);
  };
  //console.log("curent ", currentTheme);
  const hourlyOrOneTimeSwitch = selectedType === "income" && (
    <ButtonSwitch
      currentTheme={currentTheme}
      buttons={buttons}
      multiple={false}
      selectedIndices={selectedIndex}
      setSelectedIndices={incomeTypeHandler}
    />
  );
  const hourlyPickers = selectedType === "income" && selectedIndex === 0 && (
    <>
      <RNPickerSelect
        onValueChange={(value) => setHourlyIncome(value)}
        placeholder={{ label: "Select a Hourly Income", value: null }}
        items={hourlyIncomes.map((cat) => ({
          label: cat.description,
          value: cat.id,
        }))}
        style={customStyles.RNPickerSelectStyle}
        value={hourlyIncome}
      />
      <RNPickerSelect
        onValueChange={(value) => setInterval(value)}
        placeholder={{ label: "Select an interval", value: null }}
        items={intervals.map((int) => ({
          label: `${getHourMinutes(int.startTime)} - ${getHourMinutes(
            int.endTime
          )}`,
          value: int.id,
        }))}
        style={customStyles.RNPickerSelectStyle}
        value={interval}
      />
    </>
  );

  const oneTimeIncomePicker = selectedType === "income" &&
    selectedIndex === 1 && (
      <RNPickerSelect
        onValueChange={(value) => setOneTimeIncome(value)}
        placeholder={{ label: "Select a One Time Income", value: null }}
        items={oneTimeIncomes.map((cat) => ({
          label: cat.description,
          value: cat.id,
        }))}
        style={customStyles.RNPickerSelectStyle}
        value={oneTimeIncome}
      />
    );

  const oneTimeExpensePicker = selectedType === "expense" && (
    <RNPickerSelect
      onValueChange={(value) => {
        console.log(" ", value);
        setOneTimeExpense(value)
      } }
      items={[
        {
          label: "Select a One Time Expense",
          value: null,
          color: currentTheme.text || "black",
        },
        ...oneTimeExpenses.map((cat) => ({
          label: cat.description,
          value: cat.id,
          color: currentTheme.text || "black",
        })),
      ]}
      style={customStyles.RNPickerSelectStyle}
      value={oneTimeExpense}
      placeholder={{}}
      useNativeAndroidPickerStyle={false}
    />
  );

  const amountRow = (
    <View style={styles.horizontalLayout}>
      <Text style={styles.label}>Amount:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter amount"
        value={amount.toString()}
        onChangeText={(text) =>
          setAmount(parseInt(text.replace(/[^0-9]/g, ""), 10) || 0)
        }
      />
    </View>
  );

  const noteInput = (
    <TextInput
      style={[styles.input, styles.multilineInput]}
      placeholder="Enter note"
      multiline
      value={note}
      numberOfLines={4}
      onChangeText={setNote}
    />
  );
  const addEventButton = (
    <TouchableOpacity
      onPress={addEvent}
      style={addButtonDisabled ? styles.disabledButton : styles.addButton}
      disabled={addButtonDisabled}
    >
      <Text
        style={
          addButtonDisabled ? styles.disabledButtonText : styles.addButtonText
        }
      >
        Add {selectedType}{" "}
        {selectedDay?.dateString && ` to ${selectedDay.dateString}`}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.addEventContainer}>
      {addEventButton}
      {hourlyOrOneTimeSwitch}
      {hourlyPickers}
      {oneTimeIncomePicker}
      {oneTimeExpensePicker}
      {(selectedType === "expense" ||
        (selectedType === "income" && selectedIndex === 1)) && (
        <React.Fragment>
          {amountRow}
          {noteInput}
        </React.Fragment>
      )}
    </View>
  );
};

export default EventAdd;
