import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Platform,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import Button from "../ui/Button";
import { AppContext } from "../../store/app-context";

const defaultTime = new Date();
defaultTime.setHours(12);
defaultTime.setMinutes(0);

const IntervalList = () => {
  // Add this line in your component with your other state variables
  const ctx = useContext(AppContext);
  const {
    state,
    dispatch,
    playSoundFile,
    interval_table,
  } = ctx;
  const { intervals } = ctx.state;
  const [isCollapsed, setIsCollapsed] = useState(true);

  const [startTime, setStartTime] = useState(defaultTime);
  const [endTime, setEndTime] = useState(defaultTime);


  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("start");
  const [currentItemIndex, setCurrentItemIndex] = useState(null);
  //dispatch({ type: "UPDATE_INTERVALS", intervals: newItems });
//   useEffect(() => {
//     const allIntervals = async () => {
// ;
//       const result = await getAllIntervalRows();

//       setItems(
//         result && result.length
//           ? result.map((r) => {
//               return {
//                 ...r,
//                 ...{
//                   startTime: new Date(r.startTime),
//                   endTime: new Date(r.endTime),
//                 },
//               };
//             })
//           : []
//       );
//       playSoundFile(null, 1);
//     };
//     allIntervals();
//   }, []);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const formatTime = (date) => {
    return `${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };

  const onChange = async (event, selectedDate) => {
    const currentDate =
      selectedDate || (mode === "start" ? startTime : endTime);
    setShow(Platform.OS === "ios");
    if (mode === "start") {
      setStartTime(currentDate);
    } else {
      setEndTime(currentDate);
    }
    // Update the existing item immediately, not just after pressing "OK" on the picker.
    if (currentItemIndex !== null) {
      const newItems = [...intervals];
      if (mode === "start") {
        newItems[currentItemIndex].startTime = currentDate;
      } else {
        newItems[currentItemIndex].endTime = currentDate;
      }
      const result = await interval_table.updateRow(newItems[currentItemIndex].id, {
        startTime: newItems[currentItemIndex].startTime.toISOString(),
        endTime: newItems[currentItemIndex].endTime.toISOString(),
      });
      console.log("interval update times result ",result)
      dispatch({ type: "UPDATE_INTERVALS", intervals: newItems });
      // setItems(newItems);
    }
  };

  const showMode = (currentMode, index) => {

    setShow(true);
    setMode(currentMode);
    setCurrentItemIndex(index); // Set the current index here

    // Important: Set the current time based on the item being edited
    if (typeof index === "number") {
      // We are editing an existing item
      const selectedItem = intervals[index];
      if (currentMode === "start") {
        setStartTime(selectedItem.startTime); // Set to the item's start time
      } else {
        setEndTime(selectedItem.endTime); // Set to the item's end time
      }
    }
  };

  const addItem = async () => {
    if (startTime && endTime) {
      const itemToAdd = {
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
      };

      const result = await interval_table.createNewRow(itemToAdd);
      console.log("interval create result ",result)
      playSoundFile(null, 2);
      const newItems = [
        ...intervals,
        { id: result, ...{ startTime: startTime, endTime: endTime } },
      ]
      dispatch({ type: "UPDATE_INTERVALS", intervals: newItems });
      // setItems((currentItems) => [
      //   ...currentItems,
      //   { id: result, ...{ startTime: startTime, endTime: endTime } },
      // ]);
      //   // Reset the times after adding
      //   setStartTime(defaultTime);
      //   setEndTime(defaultTime);
    }
  };

  const deleteItem = async (itemId, index) => {
    const newItems = intervals.filter((i) => i.id !== itemId);
    const result = await interval_table.deleteRow(itemId);
    console.log("interval delete result ",result)
    playSoundFile(null, 5);
    dispatch({ type: "UPDATE_INTERVALS", intervals: newItems });
    // setItems(newItems);
  };

  const ItemView = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => showMode("start", index)}
          style={styles.timeButton}
        >
          <Text style={styles.itemText}>{formatTime(item.startTime)}</Text>
        </TouchableOpacity>
        <Text style={styles.itemText}> - </Text>
        <TouchableOpacity
          onPress={() => showMode("end", index)}
          style={styles.timeButton}
        >
          <Text style={styles.itemText}>{formatTime(item.endTime)}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => deleteItem(item.id, index)}
          style={styles.iconButton}
        >
          <Ionicons name="trash-outline" size={24} color="red" />
        </TouchableOpacity>
      </View>
    );
  };
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCollapse} style={styles.collapseButton}>
        <Text style={styles.collapseButtonText}>
          {isCollapsed ? "Shifts" : "Hide Shifts"}
        </Text>
      </TouchableOpacity>
      {!isCollapsed && (
        <View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => showMode("start")}
              style={styles.timeButton}
            >
              <Text style={styles.itemText}>{formatTime(startTime)}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => showMode("end")}
              style={styles.timeButton}
            >
              <Text style={styles.itemText}>{formatTime(endTime)}</Text>
            </TouchableOpacity>
            <Button onPress={addItem} shape="pill">
              <Ionicons name="add" size={24} color="#fff" />
            </Button>
          </View>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={mode === "start" ? startTime : endTime}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}

          <FlatList
            data={intervals}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item, index }) => (
              <ItemView item={item} index={index} />
            )}
          />
        </View>
      )}
    </View>
  );
};
export default IntervalList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
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
    fontSize: 16,
  },
  timeButton: {
    padding: 5,
  },
  iconButton: {
    marginLeft: 10,
  },
});
