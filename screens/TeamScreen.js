import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Picker,
  Button,
  Image,
  ActivityIndicator,
} from "react-native";
import { getLeaguesByTeam, getTeamStatistics } from "../service/api";
import TeamSquad from "./TeamSquad";
import TeamLogo from "./TeamLogo";
import SquadNews from "./TeamNews";
import { getNewsBBC, getLogoAzure } from "../service/scraperApi";
const TeamScreen = (props) => {
  const [news, setNews] = useState([]);
  const [logoUri, setLogoUri] = useState("");
  const { team } = props.route.params;

  useEffect(() => {
    console.log("from effect league team");
    console.log(team);
    if (Object.keys(team).length > 0) {
      getLogo();
      asyncGLBT();
    }

    return () => {};
  }, []);

  const cleanUp = () => {
    props.navigation.navigate("Home", { props: { toCleanUp: true } });
    console.log("Sent navigation and toCleanup");
  };
  const getLogo = async () => {
    getLogoAzure(team.name, (data) => {
      console.log("logo uri:" + data);
      setLogoUri(data);
    });
  };
  const asyncGLBT = async () => {
    console.log("asyncglbt");
    console.log(team.url);
    await getNewsBBC(team.url, (data) => {
      console.log(data);
      setNews(data);
    });
    console.log("helloer");
  };

  // useEffect(() => {
  //   if (leagues.length > 0)
  //     getTeamStatistics(team.team_id, leagues[0].league_id, setStatistics);
  //   return () => {};
  // }, leagues);

  return (
    <View style={styles.container}>
      {logoUri.length > 0 ? (
        <TeamLogo team={team} style={styles.logo} uri={logoUri}></TeamLogo>
      ) : (
        <View></View>
      )}

      {Object.keys(news).length > 0 ? (
        <SquadNews style={styles.news} news={news}></SquadNews>
      ) : (
        <ActivityIndicator></ActivityIndicator>
      )}

      <Button onPress={cleanUp} title="CHANGE TEAM"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", flex: 1 },
  logo: { flex: 1 },
  news: { flex: 5 },
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
