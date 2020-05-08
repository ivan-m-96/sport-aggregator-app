import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const TeamLogo = ({ team, uri }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{
            uri,
          }}
        ></Image>
      </View>
      <Text>{team.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 150,
    height: 150,
  },
  image: {
    flex: 1,
  },
  container: { alignItems: "center" },
});

export default TeamLogo;
