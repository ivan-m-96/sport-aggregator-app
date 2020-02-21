import React from "react";
import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getTeamStatistics, getLeaguesByTeam } from "../service/api";

const SquadNews = ({ team, statistics, leagues }) => {
  return (
    <View>
      {leagues.map(league => (
        <Text key={league.league_id}>{league.league_id}</Text>
      ))}
      {<Text>{statistics.matchs}</Text>}
    </View>
  );
};

export default SquadNews;
