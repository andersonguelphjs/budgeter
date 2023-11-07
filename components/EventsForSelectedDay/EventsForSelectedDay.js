import React from "react";
import { View } from "react-native";
import EventItem from "../EventItem/EventItem";
import { getTypeArrayKey } from "../../util/budgeter_util";
const EventsForSelectedDay = (config) => {
  const {
    selectedDay,
    dayEvents,
    categories,
    intervals,
    deleteEvent,
    getHourMinutes,
    styles,
    currentTheme ={}
  } = config;
  const { dateString, timestamp } = selectedDay;
  const {    hourlyIncomes,
    oneTimeIncomes,
    oneTimeExpenses}= categories

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
      
        const typeKey = getTypeArrayKey(event_type_key)
       
        const items = categories[typeKey];
        const itemId = event[event_type_key]
        const item = items.find(i => i.id === itemId) || {}

        const intervalItem = event_type_key === "hourly_income_id" && intervals.find(i => i.id === interval_id) || {}

        return (
          <EventItem
            dateString={dateString}
            key={`${timestamp}_${index}`}
            amount={amount}
            rate={rate}
            description={item.description || "missing description"}
            intervalText={Object.keys(intervalItem).length > 0 && `${getHourMinutes(intervalItem.endTime)} - ${getHourMinutes(intervalItem.startTime)}` || ""}
            color={item.color}
            onDelete={deleteEvent}
            getHourMinutes={getHourMinutes}
          />
        );
      })}
    </View>
  );
};

export default EventsForSelectedDay;
