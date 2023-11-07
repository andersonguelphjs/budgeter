import { format } from 'date-fns';
import { getProperty, getTypeArrayKey } from './budgeter_util';
export const getHourMinutes = (date) => {
  // Format the date to get hours and minutes
  //return date
  console.log("getHourMinutes ", date);
  const hourMinutes = format(date, 'HH:mm');
  return hourMinutes;
}

export const convertToCalendarEvents = (config) => {
  const {events, categories} = config;
    
  const { hourlyIncomes, oneTimeIncomes, oneTimeExpenses} = categories;
  const calendarEvents = {};
  console.log("converting calendar events ", events)
  events.forEach((event, index) => {

    const {event_type_key, amount, hourly_income_id, one_time_expense_id, one_time_income_id, interval_id, date, timestamp, note, type, id} = event;
    
    // Check if the date already exists in the calendar events
    if (!calendarEvents[date]) {
      calendarEvents[date] = { dots: [] };
    }
    // const color = getColor()
    const items = getTypeArrayKey(event_type_key)

    const color = getProperty({
      items: categories[getTypeArrayKey(event_type_key)],
      id: event[event_type_key],
      property: "color",
      default_return : "#000"
    })

    // Create the event dot
    const eventDot = {...event, ...{
      key: `${timestamp}_${index}`,
      color: color,
      dot: {
        width: 14,
        height: 14,
        marginTop: 1,
        marginHorizontal: 1,
        borderRadius: 2,
        opacity: 0
      },
      day: {
        dateString: date,
        day: new Date(timestamp).getUTCDate(),
        month: new Date(timestamp).getUTCMonth() + 1, // getUTCMonth() is 0-indexed
        timestamp: timestamp,
        year: new Date(timestamp).getUTCFullYear(),
      }}

    };

    // Add the event dot to the date entry
    calendarEvents[date].dots.push(eventDot);
  });

  return calendarEvents;
};

