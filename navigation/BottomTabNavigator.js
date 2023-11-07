import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import CalendarScreen from "../screens/CalendarScreen";
import MonthlySummaryScreen from "../screens/MonthlySummaryScreen";
import AdminScreen from "../screens/AdminScreen";
import SummaryScreen from "../screens/SummaryScreen";
import { Ionicons } from "@expo/vector-icons";

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // headerShown: route.name === "Settings",
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // https://github.com/expo/vector-icons/blob/master/build/vendor/react-native-vector-icons/glyphmaps/Ionicons.json
          if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "Calendar") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === "Pie") {
            iconName = focused ? "pie-chart" : "pie-chart-outline";
          } else if (route.name === "Admin") {
            iconName = focused ? "fast-food" : "fast-food-outline";
          } else {
            iconName = focused ? "stats-chart" : "stats-chart-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Pie" component={MonthlySummaryScreen} />
      <Tab.Screen name="Summary" component={SummaryScreen} />
      <Tab.Screen name="Admin" component={AdminScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
