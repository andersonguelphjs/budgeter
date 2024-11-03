import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Make sure you have imported Ionicons from '@expo/vector-icons'
import { dynamicStyle } from "../../util/text";
import _ from "lodash";
const EventItem = ({
  dateString,
  currentTheme = {},
  description,
  intervalText,
  startTime,
  endTime,
  index,
  onDatePress,
  color,
  onDelete,
  getHourMinutes,
  amount,
  rate,
  note,
  event_type_key,
  id,
  event_table,
  dispatch,
  styles,
  translation,
}) => {
  // Construct the display text for the event
  const [itemValue, setItemValue] = useState("");
  const [message, setMessage] = useState("");
  console.log("EI event_type_key", event_type_key, index);
  useEffect(() => {
    setItemValue(String(amount || rate || ""));
  }, [amount, rate]);

  useEffect(() => {
    if (message) setTimeout(() => setMessage(""), 5000);
  }, [message]);
  // Determine the background color for the item
  const backgroundColor = color || "#FFF";
  const event = { day: dateString, key: event_type_key, id: id };
  // const debouncedUpdate = _.debounce(event_table.updateRow, 3000); // 3000 milliseconds = 3 seconds
  const debouncedUpdate = useCallback(
    _.debounce(async (id, data) => {
      try {
        const result = await event_table.updateRow(id, data);
        console.log("update event text result", result);
        setMessage(translation["updated"]);
        //setEditIndex(index)
        //playSoundFile(null, 4);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }, 3000),
    []
  );
  const extractNumbers = (str) => {
    return str.match(/\d+/g)?.join("") || "";
  };

  const editAmount = async (text, oldValue, event_type_key, id) => {
    //const newItems = [...items];
    console.log(
      `edit amount text: ${text}, oldValue ${oldValue} type: ${event_type_key}, id: ${id}`
    );
    const newValue = extractNumbers(text);
    setItemValue(newValue);

    //console.log("edit rate2" , index, newItems[index])
    // newItems[index][amountOrRate] = text;
    dispatch({ type: "UPDATE_EVENT_AMOUNT", id: id, amount: newValue });
    // if (newValue === oldValue) return;
    // try {
    //   const result = await debouncedUpdate(id, {
    //     "amount" : newValue,
    //   });
    //   console.log("update editAmount result ", result);
    //   setMessage("updated")
    //   // setEditIndex(index)
    //   // playSoundFile(null, 4);
    // } catch (error) {
    //   console.error("An error occurred:", error);
    // }
  };
  const editNote = async (text, event_type_key, id) => {
    console.log(`edittext: ${text}, type: ${event_type_key}, id: ${id}`);
    dispatch({ type: "UPDATE_EVENT_NOTE", id: id, note: text });
  };
  const formatTime = (date) => {
    return `${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };
  // (You might have a function to determine text color based on background, we'll assume it's called 'dynamicStyle')
  const dynamicColor = dynamicStyle(backgroundColor);
  const eventDate = dateString && (
    <Text style={{ color: dynamicColor.color }}>{dateString}</Text>
  );
  const eventDescription = description && (
    <Text style={{ color: dynamicColor.color }}>{description}</Text>
  );
  const amountOrRate = (amount || rate) && (
    <TextInput
      style={{ color: dynamicColor.color }}
      keyboardType="numeric"
      value={itemValue}
      //onChangeText={(text) => editAmount(text, itemValue, event_type_key, id)}
      onChangeText={(text) => {
        //editRate(item.type, text, index);
        editAmount(text, itemValue, event_type_key, id);
        debouncedUpdate(id, { amount: text });
      }}
    />
  );
  const shiftTimes = startTime && endTime && (
    <View style={[styles.startEndTimeContainer, { color: dynamicColor.color }]}>
      <TouchableOpacity
        onPress={() => onDatePress("start", index)}
        style={styles.timeButton}
      >
        <Text style={{ color: dynamicColor.color }}>
          {formatTime(new Date(startTime))}
        </Text>
      </TouchableOpacity>
      <Text style={{ color: dynamicColor.color }}> - </Text>
      <TouchableOpacity
        onPress={() => onDatePress("end", index)}
        style={styles.timeButton}
      >
        <Text style={{ color: dynamicColor.color }}>
          {formatTime(new Date(endTime))}
        </Text>
      </TouchableOpacity>
    </View>
  );
  const deleteEvent = (
    <TouchableOpacity onPress={() => onDelete(event)} style={styles.iconButton}>
      <Ionicons name="trash-outline" size={24} color="#FF0000" />
    </TouchableOpacity>
  );

  const eventNote = note && (
    <View>
      <TextInput
        style={{
          color: dynamicColor.color,
          marginLeft: 5,
          marginBottom: 5,
        }}
        value={note}
        //onChangeText={(text) => editAmount(text, itemValue, event_type_key, id)}
        onChangeText={(text) => {
          //editRate(item.type, text, index);
          editNote(text, event_type_key, id);
          debouncedUpdate(id, { note: text });
        }}
      />
    </View>
  );
  const eventMessage = message && (
    <View>
      <Text
        style={{
          color: "#FF0000",
          textAlign: "center",
          marginBottom: 5,
        }}
      >
        {message || ""}
      </Text>
    </View>
  );
  //console.log("dynamicColor: ", dynamicColor);
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        marginBottom: 5,
      }}
    >
      <View style={styles.eventItem}>
        {eventDate}
        {eventDescription}
        {amountOrRate}
        {shiftTimes}
        {deleteEvent}
      </View>
      {eventNote}
      {eventMessage}
    </View>
  );
};

// You might need to move or replicate some of the relevant styles here
// const styles = StyleSheet.create({
//   eventListContainer: {
//     padding: 10,
//   },
//   eventItem: {
//     flexDirection: "row",
//     padding: 5,
//     borderRadius: 5,
//     justifyContent: "space-between",
//     alignItems: "center",
//     // additional styling...
//   },
//   iconButton: {
//     // ... your styles for the delete button
//   },
//   // any other styles related to this component
// });

export default EventItem;
