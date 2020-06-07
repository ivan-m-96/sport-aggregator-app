import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Button, ListItem } from "react-native-elements";

const Settings = (props) => {
  const cleanUp = () => {
    props.navigation.navigate("Home", { props: { toCleanUp: true } });
    console.log("Sent navigation and toCleanup");
  };
  return (
    <View style={styles.container}>
      <ListItem
        style={styles.ListItem}
        title={"Current team: " + props.team.name}
        chevron={true}
        onPress={cleanUp}
      ></ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    // alignContent: "center",
    // alignItems: "center",
    flex: 1,
  },
  ListItem: {
    // width: 200,
  },
});

export default connect((state) => {
  console.log("state object");
  console.log(state.team);
  return { team: state.team };
})(Settings);
