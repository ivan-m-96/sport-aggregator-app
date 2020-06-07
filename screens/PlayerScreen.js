import React from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";

export default function PlayerScreen({ route, navigation }) {
  return <WebView source={{ uri: route.params.url }} />;
}
