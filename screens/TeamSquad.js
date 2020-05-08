import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { getSquad } from "../service/scraperApi";
import Player from "../components/Player";
const SquadScreen = ({ team }) => {
  const [squad, setsquad] = useState([]);
  useEffect(() => {
    getSquad(team.name, setsquad);
    return () => {};
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text> {team.name}</Text>
        {squad?.map((player, i) => {
          return <Player key={i} player={player}></Player>;
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default connect((state) => {
  console.log("state object");
  console.log(state.team);
  return { team: state.team };
})(SquadScreen);
