import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TeamScreen from "./TeamScreen";
import TeamSquad from "./TeamSquad";
const TabTeamScreen = (props) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="TeamScreen" component={TeamScreen} />
      <Tab.Screen name="TeamSquad" component={TeamSquad} />
    </Tab.Navigator>
  );
};

export default TabTeamScreen;
