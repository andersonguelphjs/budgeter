import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import ChartInScreen from "../screens/ChartInScreen";
import ChartOutScreen from "../screens/ChartOutScreen";
import DateInScreen from "../screens/DateInScreen";
import DateOutScreen from "../screens/DateOutScreen";
import SummaryScreen from "../screens/SummaryScreen";
import { Ionicons } from "@expo/vector-icons";
const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // https://github.com/expo/vector-icons/blob/master/build/vendor/react-native-vector-icons/glyphmaps/Ionicons.json
          if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "ChartIn") {
            iconName = focused ? "pie-chart" : "pie-chart-outline";
          } else if (route.name === "ChartOut") {
            iconName = focused ? "bar-chart" : "bar-chart-outline";
          } else if (route.name === "DateIn") {
            iconName = focused ? "fast-food" : "fast-food-outline";
          } else if (route.name === "DateOut") {
            iconName = focused ? "planet" : "planet-outline";
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
      <Tab.Screen name="ChartIn" component={ChartInScreen} />
      <Tab.Screen name="ChartOut" component={ChartOutScreen} />
      <Tab.Screen name="DateIn" component={DateInScreen} />
      <Tab.Screen name="DateOut" component={DateOutScreen} />
      <Tab.Screen name="Summary" component={SummaryScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
