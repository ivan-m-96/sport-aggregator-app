import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Linking } from "react-native";
import InAppBrowser from "react-native-inappbrowser-reborn";
import { Card, Button } from "react-native-elements";

const SquadNews = ({ news, navigation }) => {
  useEffect(() => {
    console.log("********************TEAMS BBC");
    console.log(news);
  }, []);

  const handleClick = async (url) => {
    navigation.navigate("NewsArticle", {
      url: url,
    });
    // try {
    //   if (await InAppBrowser.isAvailable()) {
    //     const result = await InAppBrowser.open(url, {
    //       // Android Properties
    //       showTitle: true,
    //       toolbarColor: "#6200EE",
    //       secondaryToolbarColor: "black",
    //       enableUrlBarHiding: true,
    //       enableDefaultShare: true,
    //       forceCloseOnRedirection: false,
    //       // Specify full animation resource identifier(package:anim/name)
    //       // or only resource name(in case of animation bundled with app).
    //       animations: {
    //         startEnter: "slide_in_right",
    //         startExit: "slide_out_left",
    //         endEnter: "slide_in_left",
    //         endExit: "slide_out_right",
    //       },
    //       headers: {
    //         "my-custom-header": "my custom header value",
    //       },
    //     });
    //     // Alert.alert(JSON.stringify(result));
    //   } else Linking.openURL(url);
    // } catch (error) {
    //   Alert.alert(error.message);
    // }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {news.map((article, index) => {
          return (
            <Card
              key={index}
              containerStyle={styles.card}
              onPress={() => {
                handleClick(article.url);
              }}
              image={article.img ? { uri: article.img } : ""}
              imageProps={{
                height: 200,
                width: 200,
              }}
            >
              <Text style={styles.title}> {article.title}</Text>
              <Text> {article.summary}</Text>

              <Button
                title="Read"
                type="outline"
                onPress={() => {
                  handleClick(article.url);
                }}
              ></Button>
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", flex: 1 },
  container_touchable: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,

    borderBottomWidth: 0.5,
  },
  title: {
    textShadowRadius: 10,
    marginBottom: 10,
  },
  card: {},
});

export default SquadNews;
