import * as React from "react";
import { Component } from "react";
import { ScrollView } from "react-native";
import { Text } from "react-native";
import Constants from "expo-constants";

export class ManifestScreen extends Component {
  public static navigationOptions = {
    title: "manifest"
  };

  public render() {
    return (
      <ScrollView>
        <Text>{JSON.stringify(Constants.manifest, undefined, 2)}</Text>
      </ScrollView>
    );
  }
}
