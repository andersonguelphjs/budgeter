import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import ButtonSwitch from "../ui/ButtonSwitch";

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


  selectedType,
  incomeType,
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
  const {hourlyIncomes, oneTimeExpenses, oneTimeIncomes} = categories;
  const [selectedIndex, setSelectedIndex] = useState(0);
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

  const incomeTypeHandler = (index)=>{

    setIncomeType(index == 0 ? "hourly" : "one_time")
    setSelectedIndex(index)
  }
  return (
    <View style={styles.addEventContainer}>
      {selectedType === "income" && (
        <ButtonSwitch
          buttons={buttons}
          multiple={false}
          selectedIndices={selectedIndex}
          setSelectedIndices={incomeTypeHandler}
        />
      )}
      {selectedType === "income" && selectedIndex === 0 && (
        <>
          <Picker
            selectedValue={hourlyIncome}
            onValueChange={(itemValue) => setHourlyIncome(itemValue)}
            prompt="Select HourlyIncome"
          >
            {/* Picker Items */}
            <Picker.Item
              key={"def_cat"}
              label="Select a Hourly Income"
              value={null}
            />
            {hourlyIncomes.map((cat) => (
              <Picker.Item
                key={`cat_${cat.id}`}
                label={cat.description}
                value={cat.id}
              />
            ))}
          </Picker>
          <Picker
            selectedValue={interval}
            onValueChange={(itemValue) => setInterval(itemValue)}
            prompt="Select interval"
          >
            <Picker.Item
              key={"def_interval"}
              label="Select an interval"
              value={null}
            />
            {intervals.map((int) => (
              <Picker.Item
                key={`int_${int.id}`}
                label={`${getHourMinutes(int.startTime)} - ${getHourMinutes(
                  int.endTime
                )}`}
                value={int.id}
              />
            ))}
          </Picker>
        </>
      )}
      {selectedType === "income" && selectedIndex === 1 && (
        <Picker
          selectedValue={oneTimeIncome}
          onValueChange={(itemValue) => setOneTimeIncome(itemValue)}
          prompt="Select HourlyIncome"
        >
          <Picker.Item
            key={"def_cat"}
            label="Select a One Time Income"
            value={null}
          />
          {oneTimeIncomes.map((cat) => (
            <Picker.Item
              key={`cat_${cat.id}`}
              label={cat.description}
              value={cat.id}
            />
          ))}
        </Picker>
      )}
      {selectedType === "expense" && (
        <Picker
          selectedValue={oneTimeExpense}
          onValueChange={(itemValue) => setOneTimeExpense(itemValue)}
          prompt="Select One Time Expense"
        >
          <Picker.Item
            key={"def_cat"}
            label="Select a One Time Expense"
            value={null}
          />
          {oneTimeExpenses.map((cat) => (
            <Picker.Item
              key={`cat_${cat.id}`}
              label={cat.description}
              value={cat.id}
            />
          ))}
        </Picker>
      )}
      {(selectedType === "expense" ||
        (selectedType === "income" && selectedIndex === 1)) && (
        <React.Fragment>
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
          <TextInput
            style={[styles.input, styles.multilineInput]}
            placeholder="Enter note"
            multiline
            numberOfLines={4}
            onChangeText={setNote}
          />
        </React.Fragment>
      )}

      {/* Add Event Button */}
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
          Add Event
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EventAdd;
