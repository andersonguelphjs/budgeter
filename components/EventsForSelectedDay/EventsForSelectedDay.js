import React, { useState } from "react";
import { View } from "react-native";
import EventItem from "../EventItem/EventItem";
import { getTypeArrayKey } from "../../util/budgeter_util";
import RNPickerSelect from "react-native-picker-select";
import DateTimePickerModal from "react-native-modal-datetime-picker";
const defaultTime = new Date();
const EventsForSelectedDay = (config) => {
  const {
    selectedDay,
    dayEvents,
    categories,
    intervals,
    deleteEvent,
    getHourMinutes,
    styles,
    currentTheme = {},
    event_table,
    dispatch,
    translation,
  } = config;
  const { dateString, timestamp } = selectedDay;
  const { hourlyIncomes, oneTimeIncomes, oneTimeExpenses } = categories;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [mode, setMode] = useState("start");
  // const [startTime, setStartTime] = useState(defaultTime);
  // const [endTime, setEndTime] = useState(defaultTime);
  const [eventIndex, setEventIndex] = useState(null);
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const getShownTime = (mode, eventIndex) => {
    console.log("getShownTime", mode, eventIndex);
    const dayEvent = dayEvents[eventIndex];
    console.log("dayEvent", dayEvent);

    if (mode === "start") {
      return new Date(dayEvent.startTime);
    } else {
      return new Date(dayEvent.endTime);
    }
  };
  const onDateConfirm = async (selectedDate) => {
    console.log("selectedDate", selectedDate);
    // const selectedDate = selectedDate;
    // setShow(Platform.OS === "ios");
    // if (mode === "start") {
    //   setStartTime(selectedDate);
    // } else {
    //   setEndTime(selectedDate);
    // }
    // Update the existing item immediately, not just after pressing "OK" on the picker.
    console.log("currentItemIn ", eventIndex);
    if (selectedDate && (eventIndex === 0 || eventIndex)) {
      let dayEvent = dayEvents[eventIndex];
      if (mode === "start") {
        dayEvent.startTime = selectedDate.toISOString();
      } else {
        dayEvent.endTime = selectedDate.toISOString();
      }
      const result = await event_table.updateRow(
        dayEvent.id,
        {
          startTime: dayEvent.startTime,
          endTime: dayEvent.endTime,
        }
      );
      console.log("evnts update times result ", result);
      dispatch({ type: "UPDATE_EVENT_INTERVAL_TIMES", id: dayEvent.id, startTime: dayEvent.startTime, endTime: dayEvent.endTime });
      setEventIndex(null);
      hideDatePicker();
      // // setStartTime(defaultTime);
      // setEndTime(defaultTime);

      // setItems(newIntervals);
    }
    // hideDatePicker();
  };

  const onDatePress = (currentMode, index) => {
    // setShow(true);

    setMode(currentMode);
    console.log("index ", index);
    setEventIndex(index); // Set the current index here

    // Important: Set the current time based on the item being edited
    // if (typeof index === "number") {
    //   // We are editing an existing item
    //   const selectedItem = dayEvents[index];
    //   // console.log("selectedItem.startTime ", selectedItem?.startTime);
    //   // if (currentMode === "start") {
    //   //   setStartTime(selectedItem.startTime); // Set to the item's start time
    //   // } else {
    //   //   setEndTime(selectedItem.endTime); // Set to the item's end time
    //   // }
    // }

    setDatePickerVisibility(true);
  };
  return (
    <View style={styles.eventListContainer}>
      {dayEvents.map((event, index) => {
        const {
          event_type_key,
          amount,
          rate,
          hourly_income_id,
          one_time_expense_id,
          one_time_income_id,
          interval_id,
          date,
          timestamp,
          note,
          type,
          id,
        } = event;

        const typeKey = getTypeArrayKey(event_type_key);

        const items = categories[typeKey];
        const itemId = event[event_type_key];
        const item = items.find((i) => i.id === itemId) || {};

        const intervalItem =
          (event_type_key === "hourly_income_id" &&
            intervals.find((i) => i.id === interval_id)) ||
          {};

        return (
          <EventItem
            styles={styles}
            dateString={dateString}
            id={id}
            index={index}
            key={`${timestamp}_${index}`}
            amount={amount}
            rate={rate}
            note={note}
            description={item.description || "missing description"}
            // intervalText={
            //   (Object.keys(intervalItem).length > 0 &&
            //     `${getHourMinutes(intervalItem.endTime)} - ${getHourMinutes(
            //       intervalItem.startTime
            //     )}`) ||
            //   ""
            // }
            startTime={event.startTime}
            endTime={event.endTime}
            onDatePress={onDatePress}
            color={item.color}
            onDelete={deleteEvent}
            getHourMinutes={getHourMinutes}
            event_type_key={event_type_key}
            event_table={event_table}
            dispatch={dispatch}
            translation={translation}
          />
        );
      })}
      {dayEvents.filter(de => de.interval_id).length > 0 && (eventIndex === 0 || eventIndex) && <View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="time"
          date={getShownTime(mode, eventIndex)}
          onConfirm={onDateConfirm}
          onCancel={hideDatePicker}
        />
      </View>}
    </View>
  );
};

export default EventsForSelectedDay;
