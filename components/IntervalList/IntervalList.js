import React, { useState, useContext, useEffect } from "react";
import RNPickerSelect from "react-native-picker-select";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  View,
  ScrollView,
  Platform,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import Button from "../ui/Button";
import { AppContext } from "../../store/app-context";
import ConfirmationModal from "../ui/ConfirmationModal";

import CustomToast from "../ui/CustomToast";
import { defaultToastObj } from "../../util/ui";
const defaultTime = new Date();


const IntervalList = (props) => {
  // Add this line in your component with your other state variables
  const {
    onItemDelete,
    modalText = "Delet this item?",
    foreign_key,
    showingList,
    updateShowingList,
    title,
  } = props;

  const screenHeight = Dimensions.get("window").height;
  const ctx = useContext(AppContext);
  const { state, dispatch, playSoundFile, tables } = ctx;
  const { interval_table } = tables;
  const { intervals, themes, settings } = ctx.state;
  const { sound, theme, notifications, currency, id, language } = settings;

  const currentTheme = themes[theme] || themes["LIGHT"];
  const styles = StyleSheet.create({
    container: {
      marginBottom: 15,
      justifyContent: "flex-start",
    },
    collapseButton: {},
    collapseButtonText: {
      color: currentTheme.text,
      fontSize: 22,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
    },
    addRow: {
      flexDirection: "row",
      justifyContent: "space-around",
      // alignItems: 'center', // Vertically align items in the center
      // justifyContent: 'space-evenly', // Evenly distribute space among items
      padding: 10, // Add some padding around the row
      // Add more styles as needed
    },
    RNPickerSelectcontainer: {
      width: 100,
    },
    RNPickerSeperatorContainer: {
      width: "5%",
    },
    pickerSelect: {
      // Add more styles as needed for picker
    },
    separatorText: {
      marginHorizontal: 5, // Space around the separator text
      fontSize: 18, // Adjust the font size as needed
      color: "black", // Set the color as needed

      // Add more styles as needed for text
    },
    addButton: {
      // Style for the add button, if needed
    },
    timeText: {
      fontSize: 16,
    },
    itemContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc",
    },
    itemText: {
      color: currentTheme.text,
    },
    timeButton: {
      padding: 5,
    },
    iconButton: {
      marginLeft: 10,
    },
  });

  const [startTime, setStartTime] = useState(defaultTime);
  const [endTime, setEndTime] = useState(defaultTime);
  
  const [mode, setMode] = useState("start");

  const [currentIntervalIndex, setCurrentItemIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const initiateDeleteItem = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    updateShowingList((title !== showingList && title) || "");
  };

  useEffect(() => {
    setIsCollapsed(showingList !== title);
  }, [setIsCollapsed, showingList, updateShowingList, isCollapsed]);

  const formatTime = (date) => {
    return `${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };

  const onTimeSelect = async (selectedDate) => {
    const currentDate =
      selectedDate || (mode === "start" ? startTime : endTime);
    // setShow(Platform.OS === "ios");
    if (mode === "start") {
      setStartTime(currentDate);
    } else {
      setEndTime(currentDate);
    }
    // Update the existing item immediately, not just after pressing "OK" on the picker.
    console.log("currentItemIn ", currentIntervalIndex);
    if (currentIntervalIndex === 0 || currentIntervalIndex) {
      const newIntervals = [...intervals];
      if (mode === "start") {
        newIntervals[currentIntervalIndex].startTime = currentDate;
      } else {
        newIntervals[currentIntervalIndex].endTime = currentDate;
      }
      const result = await interval_table.updateRow(
        newIntervals[currentIntervalIndex].id,
        {
          startTime: newIntervals[currentIntervalIndex].startTime.toISOString(),
          endTime: newIntervals[currentIntervalIndex].endTime.toISOString(),
        }
      );
      console.log("interval update times result ", result);
      dispatch({ type: "UPDATE_INTERVALS", intervals: newIntervals });
      setCurrentItemIndex(null);
      setStartTime(defaultTime);
      setEndTime(defaultTime);
      
      // setItems(newIntervals);
    }
    hideDatePicker();
  };

  const onChangeShowMode = (currentMode, index) => {
    // setShow(true);
    
    setMode(currentMode);
    console.log("index ", index);
    setCurrentItemIndex(index); // Set the current index here

    // Important: Set the current time based on the item being edited
    if (typeof index === "number") {
      // We are editing an existing item
      const selectedItem = intervals[index];
      console.log("selectedItem.startTime ", selectedItem?.startTime)
      if (currentMode === "start") {
        setStartTime(selectedItem.startTime); // Set to the item's start time
      } else {
        setEndTime(selectedItem.endTime); // Set to the item's end time
      }
    }
    
    setDatePickerVisibility(true);
  };

  const addItem = async () => {
    if (startTime && endTime && startTime < endTime) {
      const itemToAdd = {
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
      };

      const result = await interval_table.createNewRow(itemToAdd);
      console.log("interval create result ", result);
      playSoundFile(null, 2);
      const newIntervals = [
        ...intervals,
        { id: result, ...{ startTime: startTime, endTime: endTime } },
      ];
      dispatch({ type: "UPDATE_INTERVALS", intervals: newIntervals });
      setStartTime(defaultTime);
      setEndTime(defaultTime);
      setCurrentItemIndex(null);
    }
    else{
      console.log("start time is not before the end time")
    }
  };

  const deleteItem = async () => {
    if (!selectedItem) return;

    console.log("deleteItem itemId", selectedItem);

    if (onItemDelete && typeof onItemDelete === "function") {
      const obj = {
        item: selectedItem,
        foreign_key: foreign_key,
        table: interval_table,
        categories_key: "intervals",
        category_items: intervals,
      };

      onItemDelete(obj);
      
    }
    closeModal();
    
  };

  const getShownTime = (mode, currentIntervalIndex) => {
    console.log("getShownTime" , mode, currentIntervalIndex);
    if (currentIntervalIndex){
      if (mode === "start") {
        return new Date(intervals[currentIntervalIndex].startTime);
      } else {
        return new Date(intervals[currentIntervalIndex].endTime);
      }
    }
    if (mode === "start") {
      return new Date(startTime);
    } else {
      return new Date(endTime);
    }
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCollapse} style={styles.collapseButton}>
        <Text style={styles.collapseButtonText}>
          {isCollapsed ? title : `Hide ${title}`}
        </Text>
      </TouchableOpacity>
      {!isCollapsed && (
        <View style={{ maxHeight: screenHeight * 0.5, paddingBottom: 50 }}>
          <ScrollView>
            <View>
                <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                date={getShownTime(mode, currentIntervalIndex)}
                onConfirm={onTimeSelect}
                onCancel={hideDatePicker}
              />
            </View>
            <View>
              {intervals.map((item, index) => (
                <View key={index} style={styles.itemContainer}>
                  <TouchableOpacity
                    onPress={() => onChangeShowMode("start", index)}
                    style={styles.timeButton}
                  >
                    <Text style={styles.itemText}>
                      {formatTime(item.startTime)}
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.itemText}> - </Text>
                  <TouchableOpacity
                    onPress={() => onChangeShowMode("end", index)}
                    style={styles.timeButton}
                  >
                    <Text style={styles.itemText}>
                      {formatTime(item.endTime)}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => initiateDeleteItem(item.id, index)}
                  >
                    <Ionicons name="trash-outline" size={24} color="red" />
                  </TouchableOpacity>
                </View>
              ))}
              <View key="new_shift" style={styles.itemContainer}>
                  <TouchableOpacity
                    onPress={() => onChangeShowMode("start")}
                    style={styles.timeButton}
                  >
                    <Text style={styles.itemText}>
                      {formatTime(startTime)}
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.itemText}> - </Text>
                  <TouchableOpacity
                    onPress={() => onChangeShowMode("end")}
                    style={endTime}
                  >
                    <Text style={styles.itemText}>
                      {formatTime(endTime)}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={addItem}
                  >
                    <Ionicons name="add-outline" size={24} color="red" />
                  </TouchableOpacity>
                </View>
            </View>
          </ScrollView>
        </View>
      )}
      <ConfirmationModal
        modalVisible={modalVisible}
        onConfirm={deleteItem}
        onCancel={closeModal}
        confirmText="Confirm"
        cancelText="Cancel"
        message={modalText}
      />

    </View>
  );
  
};


export default IntervalList;
