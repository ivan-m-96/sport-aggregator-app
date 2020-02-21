import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import Chooser from "./Chooser";
import { StyleSheet, View } from "react-native";
import getCountries from "../service/api";

const startScreen = props => {
  const [chosenTeam, setchosenTeam] = useState({});
  const cleanUp = () => {
    AsyncStorage.clear();
    setchosenTeam({});
    props.navigation.navigate("Home");
    console.log("cleanup");
  };
  useEffect(() => {
    const fetchChosenTeam = async () => {
      try {
        await AsyncStorage.getItem("@chosen_team").then(value => {
          if (value) {
            let chosenTeam = JSON.parse(value);
            setchosenTeam(chosenTeam);
            if (Object.keys(chosenTeam).length > 0) {
              props.navigation.navigate("TeamScreen", {
                team: chosenTeam,
                cleanUp: cleanUp
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

  const chooseTeamHandler = async team => {
    try {
      await AsyncStorage.setItem("@chosen_team", JSON.stringify(team));
    } catch (e) {
      console.log(e);
    }
    setchosenTeam(team);
    console.log("Navigating to teamScreen through chooseteamhandler");
    props.navigation.navigate("TeamScreen", {
      team: team,
      cleanUp: cleanUp
    });
  };

  return (
    <View style={styles.container}>
      <Chooser chooseTeamHandler={chooseTeamHandler}></Chooser>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default startScreen;
