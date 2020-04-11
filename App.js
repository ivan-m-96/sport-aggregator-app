import "react-native-gesture-handler";
import React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TeamScreen from "./screens/TeamScreen";
import startScreen from "./screens/StartScreen";
import TeamSquad from "./screens/TeamSquad";

export default function App() {
  const Tab = createBottomTabNavigator();
  const TabTeamScreen = () => (
    <Tab.Navigator>
      <Tab.Screen name="TeamScreen" component={TeamScreen} />
      <Tab.Screen name="TeamSquad" component={TeamSquad} />
    </Tab.Navigator>
  );

  const Stack = createStackNavigator();
  // const AppContainer = createAppContainer(rootNavigator);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={startScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="TeamScreen"
          component={TabTeamScreen}
          options={{ title: "Team screen", headerLeft: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
