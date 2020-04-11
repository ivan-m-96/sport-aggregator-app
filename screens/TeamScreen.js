import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Picker, Button, Image } from "react-native";
import { getLeaguesByTeam, getTeamStatistics } from "../service/api";
import TeamSquad from "./TeamSquad";
import TeamLogo from "./TeamLogo";
import TeamNews from "./TeamNews";
const TeamScreen = (props) => {
  const [leagues, setleagues] = useState([]);
  const [league, setleague] = useState({});
  const [statistics, setstatistics] = useState();
  const { team } = props.route.params;

  useEffect(() => {
    console.log("from effect league");
    if (team.team_id) {
      asyncGLBT();
      console.log("ting");
      console.log(leagues);
    }

    return () => {};
  }, []);

  const cleanUp = () => {
    props.navigation.navigate("Home", { props: { toCleanUp: true } });
    console.log("Sent navigation and toCleanup");
  };
  const asyncGLBT = async () => {
    console.log("asyncglbt");
    await getLeaguesByTeam(team.team_id, setleagues);
    console.log("helloer");
  };

  // useEffect(() => {
  //   if (leagues.length > 0)
  //     getTeamStatistics(team.team_id, leagues[0].league_id, setStatistics);
  //   return () => {};
  // }, leagues);
  useEffect(() => {
    if (leagues.length > 0) {
      console.log("from effect");
      console.log(leagues[0]);
      getTeamStatistics(team.team_id, leagues[0].league_id, setstatistics);
    }
    return () => {};
  }, [leagues]);
  return (
    <View style={styles.container}>
      <TeamLogo team={team}></TeamLogo>
      {leagues.length > 0 && statistics ? (
        <TeamNews
          statistics={statistics}
          team={team}
          leagues={leagues}
        ></TeamNews>
      ) : null}
      <TeamSquad></TeamSquad>

      <Button onPress={cleanUp} title="CHANGE TEAM"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center" },

  picker: {
    height: 50,
    width: 200,
    color: "black",
  },
  itemStyle: {
    textAlign: "center",
    color: "red",
  },
});

export default TeamScreen;
