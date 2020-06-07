import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "./Settings";
import NewsScreenNavigator from "./NewsScreenNavigator";
import Ionicons from "react-native-vector-icons/Ionicons";
import SquadScreenNavigator from "./SquadScreenNavigator";
const TabTeamScreen = (props) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "News") {
            iconName = "ios-football";
          } else if (route.name === "Squad") {
            iconName = "ios-list";
          } else if (route.name === "Settings") {
            iconName = "ios-settings";
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
      <Tab.Screen
        name="News"
        component={NewsScreenNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Squad" component={SquadScreenNavigator} />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: true }}
      />
    </Tab.Navigator>
  );
};

export default TabTeamScreen;
