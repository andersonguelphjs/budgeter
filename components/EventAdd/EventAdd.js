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
  translation,
  eventAddedMsg
}) => {
  const { hourlyIncomes, oneTimeExpenses, oneTimeIncomes } = categories;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const customStyles = useCustomStyles();
  // "毎時":"毎時",
  //      "one_time":"1 回",
  //      "add_expense":"経費を追加",
  //      "add_income":"収入を追加",
  //      "select_expense":"1 回限りの経費を選択",
  //      "select_hourly_income":"時給を選択してください",
  //      "select_interval":"間隔を選択"
  const buttons = [
    {
      title: translation["hourly"],
      onPress: () => {
        console.log("Button 1 pressed");
        // additional actions
      },
    },
    {
      title: translation["one_time"],
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
  console.log("ev oneTimeIncome ", oneTimeIncome);
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
        onValueChange={(value) =>{
          console.log("hourlyPickers ", value)
          setHourlyIncome(value)
        } }
        placeholder={{ label: translation["select_hourly_income"], value: null }}
        items={hourlyIncomes.map((cat) => ({
          label: cat.description,
          value: cat.id,
        }))}
        style={customStyles.RNPickerSelectStyle}
        value={hourlyIncome || null}
      />
      <RNPickerSelect
        onValueChange={(value) => setInterval(value)}
        placeholder={{ label: translation["select_interval"], value: null }}
        items={intervals.map((int) => ({
          label: `${getHourMinutes(int.startTime)} - ${getHourMinutes(
            int.endTime
          )}`,
          value: int.id,
        }))}
        style={customStyles.RNPickerSelectStyle}
        value={interval || null}
      />
    </>
  );

  const oneTimeIncomePicker = selectedType === "income" &&
    selectedIndex === 1 && (
      <RNPickerSelect
        onValueChange={(value) => {
          console.log("onValueChang ", value);
          const chosen = oneTimeIncomes.find((cat) => cat.id === value);
          console.log("chosen ", chosen);
          setAmount(chosen?.amount || 0);
          setOneTimeIncome(value);
        }}
        placeholder={{ label: translation["select_one_time_income"], value: null }}
        items={oneTimeIncomes.map((cat) => ({
          label: cat.description,
          value: cat.id,
        }))}
        style={customStyles.RNPickerSelectStyle}
        value={oneTimeIncome || null}
      />
    );

  const oneTimeExpensePicker = selectedType === "expense" && (
    <RNPickerSelect
      onValueChange={(value) => {
        console.log("onValueChang ", value);
        const chosen = oneTimeExpenses.find((cat) => cat.id === value);
        console.log("chosen ", chosen);
        setAmount(chosen?.amount || 0);
        setOneTimeExpense(value);
      }}
      items={[
        {
          label: translation["select_expense"],
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
      value={oneTimeExpense || null}
      placeholder={{}}
      useNativeAndroidPickerStyle={false}
    />
  );

  const amountRow = (
    <View style={styles.horizontalLayout}>
      <Text style={styles.label}>{translation["amount"]}</Text>
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
      placeholder={translation["enter_note"]}
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
        + {translation[selectedType]}{" "}
        {selectedDay?.dateString && `(${selectedDay.dateString})`}
      </Text>
    </TouchableOpacity>
  );
  const msgText = eventAddedMsg && <Text style={styles.addedEventMsg}>{eventAddedMsg}</Text>
  return (
    <View style={styles.addEventContainer}>
      {msgText}
      {addEventButton}
      {hourlyOrOneTimeSwitch}
      {hourlyPickers}
      {oneTimeIncomePicker}
      {oneTimeExpensePicker}
      {(selectedType === "expense" ||
        (selectedType === "income" && selectedIndex === 1)) &&
        amountRow}
      {selectedType === "expense" && noteInput}
    </View>
  );
};

export default EventAdd;
