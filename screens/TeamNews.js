import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Linking } from "react-native";

const SquadNews = ({ news }) => {
  useEffect(() => {
    console.log("********************TEAMS BBC");
    console.log(news);
  }, []);
  const handleClick = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {news.map((article, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.container_touchable}
              onPress={() => {
                handleClick(article.url);
              }}
            >
              <Text style={styles.title}> {article.title}</Text>
              <Text> {article.summary}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", flex: 1 },
  container_touchable: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,

    borderBottomWidth: 1,
  },
  title: {
    textShadowRadius: 10,
  },
});

export default SquadNews;
