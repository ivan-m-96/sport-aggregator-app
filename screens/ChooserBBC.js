import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dimensions, ScrollView } from "react-native";
import { AsyncStorage } from "react-native";
import addTeamAction from "../actions";
import { List } from "react-native-paper";
import {
  StyleSheet,
  View,
  Picker,
  Button,
  ClippingRectangle,
} from "react-native";
import { getLeaguesBBC, getTeamsByLeagueBBC } from "../service/scraperApi";
import { compose } from "redux";
const ChooserBBC = (props) => {
  const [countries, setCountries] = useState([]);
  const [country, setcountry] = useState({});
  const [leagues, setleagues] = useState([]);
  const [league, setleague] = useState({});
  const [teams, setteams] = useState([]);
  const [team, setteam] = useState({});
  const [expanded, setExpanded] = useState({});
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getLeaguesBBC((data) => {
        // console.log(data);
        data.map((league, index) => {
          console.log(league.title);
          console.log(index);
        });
        setleagues(data);
      });
    }

    return () => {
      mounted = false;
    };
  }, []);

  const filterOutEmptyObjects = (objArray) => {
    return objArray.filter((value) => Object.keys(value).length != 0);
  };
  const getSize = () => {
    return {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    };
  };

  return (
    <View style={styles.container}>
      <View style={[styles.pickerContainer, getSize()]}>
        <List.Section title="Choose a team">
          <ScrollView>
            {leagues.map((league, index) => {
              return (
                <List.Accordion title={league.title} key={index}>
                  {filterOutEmptyObjects(league.teams).map((team, index) => {
                    return (
                      <List.Item
                        key={index}
                        title={team.name}
                        onPress={() => {
                          console.log("Button press");
                          props.chooseTeamHandler(team);
                        }}
                      ></List.Item>
                    );
                  })}
                </List.Accordion>
              );
            })}
          </ScrollView>
        </List.Section>

        {/* <Picker
          selectedValue={league}
          style={styles.picker}
          onValueChange={(itemValue) => {
            setleague(itemValue);
            console.log("WHATTHTE");
            console.log(itemValue.teams);
            setteams(filterOutEmptyObjects(itemValue.teams));
          }}
          itemStyle={styles.itemStyle}
        >
          {leagues.map((league, index) => {
            return (
              <Picker.Item
                key={index}
                style={styles.itemStyle}
                label={league.title}
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
      <View>
        <Button
          title="Choose"
          onPress={() => {
            console.log("Button press");
            props.chooseTeamHandler(team);
          }}
        ></Button> */}
      </View>
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

export default connect()(ChooserBBC);
