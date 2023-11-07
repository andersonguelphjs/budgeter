import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Make sure you have imported Ionicons from '@expo/vector-icons'
import { dynamicStyle } from "../../util/text";
const EventItem = ({
  dateString,
  currentTheme ={},
  description,
  intervalText,
  color,
  onDelete,
  getHourMinutes,
  amount,
  rate
}) => {
  // Construct the display text for the event

  // Determine the background color for the item
  const backgroundColor = color || "#FFF";
  // (You might have a function to determine text color based on background, we'll assume it's called 'dynamicStyle')
  const dynamicColor = dynamicStyle(backgroundColor);
  console.log("dynamicColor: ", dynamicColor);
  return (
    <View style={[styles.eventItem, { backgroundColor: backgroundColor, borderWidth: 1, borderColor: 'black' }]}>
      {dateString && (
        <Text style={{ color: dynamicColor.color }}>{dateString}</Text>
      )}
      {description && (
        <Text style={{ color: dynamicColor.color }}>{description}</Text>
      )}
      {(amount || rate) && (
        <Text style={{ color: dynamicColor.color }}>{amount || rate}</Text>
      )}
      {intervalText && (
        <Text style={{ color: dynamicColor.color }}>{intervalText}</Text>
      )}
      <TouchableOpacity
        onPress={() => onDelete(event)}
        style={styles.iconButton}
      >
        <Ionicons name="trash-outline" size={24} color="#FF0000" />
      </TouchableOpacity>
    </View>
  );
};

// You might need to move or replicate some of the relevant styles here
const styles = StyleSheet.create({
  eventListContainer: {
    padding: 10,
  },
  eventItem: {
    flexDirection: "row",
    padding: 5,
    borderRadius: 5,
    justifyContent: "space-between",
    alignItems: "center",
    // additional styling...
  },
  iconButton: {
    // ... your styles for the delete button
  },
  // any other styles related to this component
});

export default EventItem;
