import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  Text,
  Image,
  StyleSheet,
  Linking,
} from "react-native";
import { ListItem } from "react-native-elements";

export default function Player({ player, navigation }) {
  const handleClick = async (url) => {
    navigation.navigate("Player", {
      player: player,
      url: url,
    });
    // Linking.canOpenURL(url).then((supported) => {
    //   if (supported) {
    //     Linking.openURL(url);
    //   } else {
    //     console.log("Don't know how to open URI: " + url);
    //   }
    // });
  };

  return (
    <View>
      <ListItem
        leftAvatar={{ source: { uri: player.img } }}
        title={player.name}
        subtitle={"(" + player.number + ") " + player.position}
        rightTitle={player.marketValue}
        rightAvatar={{ source: { uri: player.countryImg }, size: "small" }}
        bottomDivider
        chevron
        onPress={() => {
          handleClick("https://transfermarkt.co.uk" + player.url);
        }}
      ></ListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 5,
    height: 5,
  },
  image: {
    width: 50,
    height: 50,
  },
  info: {},
  container: {
    height: 50,
    flex: 1,
  },
});
