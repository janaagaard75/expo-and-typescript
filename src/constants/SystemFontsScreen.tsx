import * as React from "react";
import { Component } from "react";
import { ScrollView } from "react-native";
import { Text } from "react-native";
import Constants from "expo-constants";

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
