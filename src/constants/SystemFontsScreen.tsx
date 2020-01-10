import Constants from "expo-constants";
import React, { Component } from "react";
import { ScrollView, Text } from "react-native";

export class SystemFontsScreen extends Component {
  public static navigationOptions = {
    title: "systemFonts"
  };

  public render() {
    return (
      <ScrollView>
        {Constants.systemFonts.map((systemFont, index) => (
          <Text key={index}>{systemFont}</Text>
        ))}
      </ScrollView>
    );
  }
}
