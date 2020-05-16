import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { ListItem } from 'react-native-elements'

export default function Player({ player }) {
  return (
    <ListItem leftAvatar={{ source: { uri: player.img } }}
    title={player.name}
    subtitle={'(' +  player.number + ') ' + player.position }
    rightTitle={player.marketValue}
    rightAvatar={{source: {uri: player.countryImg}}}
    bottomDivider></ListItem>
    // <View style={styles.container}>
    //   {player.img ? (
    //     <Image
    //       resizeMode="cover"
    //       style={styles.image}
    //       source={{ uri: player.img }}
    //     ></Image>
    //   ) : (
    //     <Text></Text>
    //   )}
    //   <TouchableWithoutFeedback style={styles.info}>
    //     <Text>
    //       {player.name + " "}
    //       {player.position + " "}
    //       {player.dateOfBirth + " "}
    //       {player.marketValue + " "}
    //       {player.country + " "}
    //     </Text>
    //   </TouchableWithoutFeedback>
    // </View>
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
