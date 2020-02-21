import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Picker, Button, Image } from "react-native";
import { getLeaguesByTeam, getTeamStatistics } from "../service/api";
import TeamSquad from "./TeamSquad";
import TeamLogo from "./TeamLogo";
import TeamNews from "./TeamNews";
const TeamScreen = props => {
  const [leagues, setleagues] = useState([]);
  const [league, setleague] = useState({});
  const [statistics, setStatistics] = useState({});

  const team = props.navigation.getParam("team", {});
  const cleanUp = props.navigation.getParam("cleanUp", () => {});
  useEffect(() => {
    if (team.team_id) {
      getLeaguesByTeam(team.team_id, setleagues);
    }

    return () => {};
  }, []);
  useEffect(() => {
    if (leagues.length > 0)
      getTeamStatistics(team.team_id, leagues[0].league_id, setStatistics);
    return () => {};
  }, leagues);

  return (
    <View style={styles.container}>
      <TeamLogo team={team}></TeamLogo>
      <TeamNews
        team={team}
        statistics={statistics}
        leagues={leagues}
      ></TeamNews>
      <TeamSquad></TeamSquad>
      {/* <Button onPress={cleanUp} title="CHANGE TEAM"></Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center" },

  picker: {
    height: 50,
    width: 200,
    color: "black"
  },
  itemStyle: {
    textAlign: "center",
    color: "red"
  }
});

export default TeamScreen;
