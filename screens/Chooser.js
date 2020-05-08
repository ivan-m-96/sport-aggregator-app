import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Picker, Button } from "react-native";

import { getCountries, getLeaguesByCountry, getTeams } from "../service/api";

const chooser = (props) => {
  const [countries, setCountries] = useState([]);
  const [country, setcountry] = useState({});
  const [leagues, setleagues] = useState([]);
  const [league, setleague] = useState({});
  const [teams, setteams] = useState([]);
  const [team, setteam] = useState({});

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getCountries(setCountries);
    }

    return () => {
      mounted = false;
    };
  }, []);

  let screen = (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={country}
          style={styles.picker}
          onValueChange={(itemValue) => {
            setcountry(itemValue);
            getLeaguesByCountry(itemValue.code, setleagues);
            console.log(leagues);
          }}
          itemStyle={styles.itemStyle}
        >
          {countries.map((cuntry, index) => {
            return (
              <Picker.Item
                key={index}
                style={styles.itemStyle}
                label={cuntry.country}
                value={cuntry}
              />
            );
          })}
        </Picker>
      </View>
      <View>
        <View
          style={{
            width: 200,
            height: 200,
          }}
        >
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={league}
              style={styles.picker}
              onValueChange={(league) => {
                setleague(league);
                getTeams(league.league_id, setteams);
              }}
              itemStyle={styles.itemStyle}
            >
              {leagues.map((league, index) => {
                return (
                  <Picker.Item
                    key={index + "a"}
                    style={styles.itemStyle}
                    label={league.name}
                    value={league}
                  />
                );
              })}
            </Picker>
          </View>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={team}
              style={styles.picker}
              onValueChange={(itemValue) => {
                setteam(itemValue);
                // getPlayers(itemValue.team_id, 2019, setplayers);
                // getFixturesByTeam(itemValue.team_id, setfixtures);
              }}
              itemStyle={styles.itemStyle}
            >
              {teams.map((team, index) => {
                return (
                  <Picker.Item
                    key={index}
                    style={styles.itemStyle}
                    label={team.name}
                    value={team}
                  />
                );
              })}
            </Picker>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Choose"
          onPress={() => {
            console.log("Button press");
            props.chooseTeamHandler(team);
          }}
        ></Button>
      </View>
    </View>
  );

  return <View style={styles.container}>{screen}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pickerContainer: {
    borderColor: "black",
    borderRadius: 0.1,
    borderWidth: 1,
    borderStyle: "solid",
  },
  picker: {
    height: 50,
    width: 200,
    color: "black",
  },
  itemStyle: {
    textAlign: "center",
    color: "red",
  },
  picture: {
    width: 100,
    height: 100,
  },
  buttonContainer: {
    width: 100,
    height: 100,
  },
});

export default chooser;
