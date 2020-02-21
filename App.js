import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import TeamScreen from "./screens/TeamScreen";
import startScreen from "./screens/StartScreen";
export default function App() {
  const RouteConfigs = {
    Home: { screen: startScreen },
    TeamScreen: {
      screen: TeamScreen,
      navigationOptions: {
        title: "Team screen",
        headerLeft: null
      }
    }
  };

  const StackNavigatorConfig = {
    initialRouteName: "Home"
  };

  const rootNavigator = createStackNavigator(
    RouteConfigs,
    StackNavigatorConfig
  );
  const AppContainer = createAppContainer(rootNavigator);
  return <AppContainer />;
}
