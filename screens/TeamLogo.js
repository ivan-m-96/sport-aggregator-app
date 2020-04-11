import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const TeamLogo = ({ team }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{
            uri:
              "https://media.api-football.com/teams/" + team.team_id + ".png",
          }}
        ></Image>
      </View>
      <Text>{team.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 200,
    height: 200,
  },
  image: {
    flex: 1,
  },
  container: { alignItems: "center" },
});

export default TeamLogo;
