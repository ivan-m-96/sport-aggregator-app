import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { AsyncStorage } from "react-native";
import Chooser from "./Chooser";
import ChooserBBC from "./ChooserBBC";
import { StyleSheet, View } from "react-native";
import getCountries from "../service/api";
import addTeamAction from "../actions";

const startScreen = (props) => {
  const [chosenTeam, setchosenTeam] = useState({});

  const cleanUp = () => {
    AsyncStorage.clear();
    setchosenTeam({});
    props.navigation.navigate("Home");
    console.log("cleanup");
  };
  useEffect(() => {
    console.log("This effect is running boiiii");
    if (props.route.params?.toCleanUp) {
      console.log("This bad boi is true and exists");
      console.log(props.route.params.toCleanUp);
      cleanUp();
    }
  }, [props.route.params?.toCleanUp]);
  useEffect(() => {
    const fetchChosenTeam = async () => {
      try {
        await AsyncStorage.getItem("@chosen_team").then((value) => {
          if (value) {
            let chosenTeam = JSON.parse(value);
            setchosenTeam(chosenTeam);
            if (Object.keys(chosenTeam).length > 0) {
              props.dispatch(addTeamAction(chosenTeam));
              props.navigation.navigate("TeamScreen", {
                screen: "News",
                params: {
                  team: chosenTeam,
                },
              });
            }
          }
          console.log("chosen team: ");
          console.log(value);
        });
      } catch (e) {
        console.log(e);
        console.log("Error reading value from the db");
      }
    };
    fetchChosenTeam();
    return () => {};
  }, []);

  const chooseTeamHandler = async (team) => {
    try {
      await AsyncStorage.setItem("@chosen_team", JSON.stringify(team));
    } catch (e) {
      console.log(e);
    }
    setchosenTeam(team);
    console.log("Navigating to teamScreen through chooseteamhandler");
    props.dispatch(addTeamAction(team));
    props.navigation.navigate("TeamScreen", {
      screen: "News",
      params: {
        team: team,
      },
    });
  };

  return (
    <View style={styles.container}>
      {/* <Chooser chooseTeamHandler={chooseTeamHandler}></Chooser> */}
      <ChooserBBC chooseTeamHandler={chooseTeamHandler}></ChooserBBC>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default connect()(startScreen);
