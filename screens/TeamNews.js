import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getTeamStatistics, getLeaguesByTeam } from "../service/api";

const SquadNews = ({ team, leagues, statistics }) => {
  return (
    <View style={styles.container}>
      {leagues.map((league) => (
        <Text key={league.league_id}>{league.name}</Text>
      ))}
      {/* {<Text>{statistics ? statistics.matchs : null}</Text>} */}
      <Text>Goals against at home: {statistics.goals.goalsAgainst.home}</Text>
      <Text>Goals against away: {statistics.goals.goalsAgainst.away}</Text>
      <Text>Goals for at home: {statistics.goals.goalsFor.home}</Text>
      <Text>Goals for away: {statistics.goals.goalsFor.away}</Text>

      {/* <Text> {league.country}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center" },
});

export default SquadNews;
