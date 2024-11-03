import React, {useContext} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import CalendarScreen from "../screens/CalendarScreen";
import MonthlySummaryScreen from "../screens/MonthlySummaryScreen";
import AdminScreen from "../screens/AdminScreen";
import SummaryScreen from "../screens/SummaryScreen";
import { Ionicons } from "@expo/vector-icons";
import { AppContext } from "../store/app-context";
import text from "../assets/language/text.json"
const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const ctx = useContext(AppContext);
  
  const { dispatch, playSoundFile, state, translation, tables } = ctx;
  const {
    hourly_income_table,
    settings_table,
    one_time_income_table,
    one_time_expense_table,
    event_table,
  } = tables;
  console.log("state", state);
  const { categories, settings, events, themes } = state;
  const { hourlyIncomes, oneTimeIncomes, oneTimeExpenses } = categories;
  const { sound, theme, notifications, currency, id, language } = settings;
  const currentTheme = themes[theme] || themes["LIGHT"];
  console.log("lsettings" , language, text?.[language]);
  return (
    <>
    {settings?.language && text?.[language] && 
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // headerShown: route.name === "Settings",
        tabBarActiveTintColor: currentTheme.bottom_nav_icon,
        tabBarInactiveTintColor: currentTheme.bottom_nav_icon_background,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // https://github.com/expo/vector-icons/blob/master/build/vendor/react-native-vector-icons/glyphmaps/Ionicons.json
          if (route.name === text[language]["Settings"]) {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === text[language]["Calendar"]) {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === text[language]["Pie"]) {
            iconName = focused ? "pie-chart" : "pie-chart-outline";
          } else if (route.name === text[language]["Admin"]) {
            iconName = focused ? "fast-food" : "fast-food-outline";
          } else {
            iconName = focused ? "stats-chart" : "stats-chart-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
    
      <Tab.Screen name={text[language]["Settings"]} component={SettingsScreen} />
      <Tab.Screen name={text[language]["Calendar"]} component={CalendarScreen} />
      <Tab.Screen name={text[language]["Pie"]} component={MonthlySummaryScreen} />
      <Tab.Screen name={text[language]["Summary"]} component={SummaryScreen} />
      <Tab.Screen name={text[language]["Admin"]} component={AdminScreen} />

    </Tab.Navigator>}</>
  );
};

export default BottomTabNavigator;
