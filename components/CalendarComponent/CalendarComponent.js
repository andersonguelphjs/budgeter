import React from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';

const CalendarComponent = ({ currentLocale, markedDates, onDayPress, onMonthChange, darkMode, markingType }) => {
  // Set the locale of the calendar
  LocaleConfig.locales["ja"] = {
    monthNames: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
    monthNamesShort: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
    dayNames: [
      "日曜日",
      "月曜日",
      "火曜日",
      "水曜日",
      "の木曜日",
      "金曜日",
      "土曜日",
    ],
    dayNamesShort: [
      "日曜日",
      "月曜日",
      "火曜日",
      "水曜日",
      "の木曜日",
      "金曜日",
      "土曜日",
    ],
    today: "今日",
  };
  LocaleConfig.locales["fr"] = {
    monthNames: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ],
    monthNamesShort: [
      "Janv.",
      "Févr.",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juil.",
      "Août",
      "Sept.",
      "Oct.",
      "Nov.",
      "Déc.",
    ],
    dayNames: [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ],
    dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
    today: "Aujourd'hui",
  };
  LocaleConfig.locales["en"] = {
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    monthNamesShort: [
      "Jan.",
      "Feb.",
      "Mar.",
      "Apr.",
      "May",
      "Jun.",
      "Jul.",
      "Aug.",
      "Sept.",
      "Oct.",
      "Nov.",
      "Dec.",
    ],
    dayNames: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    today: "Today",
  };

  LocaleConfig.defaultLocale = currentLocale;
  const calendarTheme = {
    backgroundColor: darkMode ? "#000" : "#fff",
    calendarBackground: darkMode ? "#1c1c1e" : "#fff",
    textSectionTitleColor: darkMode ? "#b6c1cd" : "#b6c1cd",
    textSectionTitleDisabledColor: darkMode ? "#d9e1e8" : "#d9e1e8",
    selectedDayBackgroundColor: darkMode ? "#00adf5" : "#00adf5",
    selectedDayTextColor: darkMode ? "#ffffff" : "#ffffff",
    todayTextColor: darkMode ? "#00adf5" : "#00adf5",
    dayTextColor: darkMode ? "#d9e1e8" : "#2d4150",
    textDisabledColor: darkMode ? "#525c69" : "#d9e1e8",
    dotColor: darkMode ? "#00adf5" : "#00adf5",
    selectedDotColor: darkMode ? "#ffffff" : "#ffffff",
    arrowColor: darkMode ? "orange" : "blue",
    disabledArrowColor: darkMode ? "#d9e1e8" : "#d9e1e8",
    monthTextColor: darkMode ? "#b6c1cd" : "#b6c1cd",
    indicatorColor: darkMode ? "blue" : "red",
    borderWidth: 1,
    borderColor: "black",
    "stylesheet.day.multiDot": {
      dot: {
        width: 10,
        height: 10,
        marginTop: 1,
        marginHorizontal: 1,
        borderRadius: 5,
      },
      // If you have multiple dots and want to adjust the space between them, you can use this:
      dotContainer: {
        marginHorizontal: 2,
      },
    },
    // ... other styling properties
  };
  return (
      <Calendar
        markedDates={markedDates}
        markingType={markingType}
        onDayPress={onDayPress}
        onMonthChange={onMonthChange}
        theme={calendarTheme}
      />
  );
};

export default CalendarComponent;
