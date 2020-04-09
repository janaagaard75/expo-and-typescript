import Constants from "expo-constants";
import React, { Component } from "react";
import { ScrollView, Text } from "react-native";

export class ManifestScreen extends Component {
  public render() {
    return (
      <ScrollView>
        <Text>{JSON.stringify(Constants.manifest, undefined, 2)}</Text>
      </ScrollView>
    );
  }
}
