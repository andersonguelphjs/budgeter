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
      
        console.log("ev ", event)
        const typeKey = getTypeArrayKey(event_type_key)
       
        const items = categories[typeKey];
        console.log("items ", items);
        const itemId = event[event_type_key]
        const item = items.find(i => i.id === itemId) || {}
        console.log("iternval l ", intervals.length, event_type_key, typeKey, interval_id)
        const intervalItem = event_type_key === "hourly_income_id" && intervals.find(i => i.id === interval_id) || {}
        console.log("intervalItem ", intervalItem)
        {/* const color = getProperty({
          items: items,
          id: itemId,
          property: "color",
          default_return: "#000",
        });
        const color = getProperty({
          items: items,
          id: itemId,
          property: "color",
          default_return: "#000",
        }); */}
        return (
          <EventItem
            dateString={dateString}
            key={`${timestamp}_${index}`}
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
