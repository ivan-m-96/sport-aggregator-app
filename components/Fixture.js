import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Fixture = ({ fixture }) => {
  return (
    <View style={styles.fixture}>
      <Text style={styles.text}>
        {fixture.homeTeam.team_name} {fixture.goalsHomeTeam}:
        {fixture.goalsHomeTeam} {fixture.awayTeam.team_name}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  fixture: {
    alignContent: "center",
  },
  text: {
    color: "#fcba03",
  },
});

export default Fixture;
