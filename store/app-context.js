import React, { useReducer, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";
import useSoundPlayer from "../hooks/use-sound";
import useSQLLiteDatabase from "../hooks/use-sqllite-database";
import { SettingsSchema } from "../models/Settings";
import { HourlyIncomeSchema } from "../models/HourlyIncome";
import { OneTimeIncomeSchema } from "../models/OneTimeIncome";
import { OneTimeExpenseSchema } from "../models/OneTimeExpense";
import { IntervalSchema } from "../models/Interval";
import { EventSchema } from "../models/Events";
import { themes } from "../constants/colors";
import translation from "../assets/language/text.json";
export const AppContext = createContext({
  currentLanguage: "en",
  categories: {},
  intervals: [],
  settings: {},
  events: [],
  themes: {},
});
const default_settings = {
  language: "ja",
  numberOfLogins: 0,
  lastLogin: new Date().toISOString(),
  creation: new Date().toISOString(),
  sound: 1,
  theme: "LIGHT",
  notifications: 1,
  currency: "¥",
  history_data: JSON.stringify([]),
};

const initialState = {
  categories: {},
  intervals: [],
  events: [],
  settings: {},
  themes: themes,
  language: "en",
};

const reducer = (state, action) => {
  // console.log(action)
  let eventToChange;
  let newEvents;
  switch (action.type) {
    case "UPDATE_ITEMS":
      return {
        ...state,
        ...{
          categories: { ...state.categories, [action.key]: action.items || [] },
        },
      };
    case "TOGGLE_SOUND":
      return {
        ...state,
        settings: { ...state.settings, sound: action.sound || "ON" },
      };
    case "TOGGLE_CURRENCY":
      return {
        ...state,
        settings: { ...state.settings, currency: action.currency || "¥" },
      };
    case "TOGGLE_NOTIFICATIONS":
      return {
        ...state,
        settings: {
          ...state.settings,
          notifications: action.notifications || "OFF",
        },
      };
    case "TOGGLE_THEME":
      return {
        ...state,
        settings: { ...state.settings, theme: action.theme || "LIGHT" },
      };
    case "UPDATE_INTERVALS":
      return { ...state, intervals: action.intervals || [] };
    case "UPDATE_EVENT_AMOUNT":
      eventToChange = {
        ...state.events.find((event) => event.id === action.id),
        amount: action.amount,
      };
      newEvents = state.events.filter((event) => event.id !== action.id);
      newEvents.push(eventToChange);
      return { ...state, events: newEvents };
    case "UPDATE_EVENT_NOTE":
      eventToChange = {
        ...state.events.find((event) => event.id === action.id),
        note: action.note,
      };
      newEvents = state.events.filter((event) => event.id !== action.id);
      newEvents.push(eventToChange);
      return { ...state, events: newEvents };
    case "UPDATE_EVENT_INTERVAL_TIMES":
      console.log("UPDATE_EVENT_INTERVAL_TIMES ", action);
      eventToChange = {
        ...state.events.find((event) => event.id === action.id),
        startTime: action.startTime,
        endTime: action.endTime,
      };
      newEvents = state.events.filter((event) => event.id !== action.id);
      newEvents.push(eventToChange);
      return { ...state, events: newEvents };
    case "UPDATE_EVENTS":
      return { ...state, events: action.events || [] };
    case "INIT_DATA":
      return {
        ...state,
        categories: action.categories,
        intervals: action.intervals,
        settings: action.settings,
        events: action.events,
      };
    case "TOGGLE_LANGUAGE":
      return {
        ...state,
        settings: { ...state.settings, language: action.language || "ja" },
      };

    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "UPDATE_GAME":
      return { ...state, game: action.game };
    default:
      return state;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [authToken, setAuthToken] = useState();
  const { playSound } = useSoundPlayer();
  const { sql_table: settings_table } = useSQLLiteDatabase({
    table: "settings",
    db_name: "shufu_budgeter",
    desiredSchema: SettingsSchema,
  });

  const { sql_table: hourly_income_table } = useSQLLiteDatabase({
    table: "HourlyIncome",
    db_name: "shufu_budgeter",
    desiredSchema: HourlyIncomeSchema,
  });

  const { sql_table: one_time_income_table } = useSQLLiteDatabase({
    table: "OneTimeIncome",
    db_name: "shufu_budgeter",
    desiredSchema: OneTimeIncomeSchema,
  });

  const { sql_table: one_time_expense_table } = useSQLLiteDatabase({
    table: "OneTimeExpense",
    db_name: "shufu_budgeter",
    desiredSchema: OneTimeExpenseSchema,
  });
  
  const { sql_table: interval_table } = useSQLLiteDatabase({
    table: "interval",
    db_name: "shufu_budgeter",
    desiredSchema: IntervalSchema,
  });

  const { sql_table: event_table } = useSQLLiteDatabase({
    table: "event",
    db_name: "shufu_budgeter",
    desiredSchema: EventSchema,
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        //console.log("log data ", settings_table)
        const fetchPromises = [
          settings_table.getFirstRow(),
          hourly_income_table.getAllRows(),
          interval_table.getAllRows(),
          event_table.getAllRows(),
          one_time_income_table.getAllRows(),
          one_time_expense_table.getAllRows(),
        ];
       // console.log("fetchPromises ", fetchPromises)
        // Wait for both promises to complete.
        const [
          fetchedSettings,
          hourlyIncomes,
          intervals,
          events,
          oneTimeIncomes,
          oneTimeExpenses,
        ] = await Promise.all(fetchPromises);
        console.log("all fetched settings ", fetchedSettings)
        let settings = fetchedSettings;
        console.log("Object.keys(settings).length ", Object.keys(settings).length)
        if (!settings || Object.keys(settings).length === 0) {
          console.log("No settings data, will created");
          const creation_result = await settings_table.createNewRow(
            default_settings
          );
          console.log("created first row: " + creation_result);
          settings = await settings_table.getFirstRow();
          console.log("got new settings data: " + settings);
        }

        const intervals_dates_cast = intervals.map((r) => {
          return {
            ...r,
            ...{
              startTime: new Date(r.startTime),
              endTime: new Date(r.endTime),
            },
          };
        });

        // Dispatch action to update state with the loaded data.
        // console.log(
        //   "got init data (HourlyIncomes, intervals, events",
        //   HourlyIncomes.length,
        //   intervals_dates_cast.length,
        //   events.length
        // );
        dispatch({
          type: "INIT_DATA",
          settings: settings,
          categories: {
            hourlyIncomes: hourlyIncomes,
            oneTimeIncomes: oneTimeIncomes,
            oneTimeExpenses: oneTimeExpenses,
          },
          intervals: intervals_dates_cast,
          events: events,
        });
      } catch (error) {
        console.error("There was an error fetching the init data", error);
        // Handle errors, potentially updating state with error information
      }
    };
    console.log("log data")
    loadData();
  }, []); // Empty dependency array means this useEffect runs once when the component mounts

  // const authenticate = (token) => {
  //   setAuthToken(token);
  //   AsyncStorage.setItem("token", token);
  // };

  // const logout = () => {
  //   setAuthToken(null);
  //   AsyncStorage.removeItem("token");
  // };

  // const playSoundFile = (e, index = null) => {
  //   playSound(index);
  // };

  const value = {
    tables: {
      event_table: event_table,
      hourly_income_table: hourly_income_table,
      one_time_income_table: one_time_income_table,
      one_time_expense_table: one_time_expense_table,
      interval_table: interval_table,
      settings_table: settings_table,
    },
    state: state,
    dispatch: dispatch,
    translation: translation,
    playSoundFile: playSound,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
