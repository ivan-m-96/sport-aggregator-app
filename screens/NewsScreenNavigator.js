import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NewsArticle from "./NewsArticle";
import TeamScreen from "./TeamScreen";
export default function SquadScreenNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="News" component={TeamScreen} />
      <Stack.Screen name="NewsArticle" component={NewsArticle} />
    </Stack.Navigator>
  );
}
