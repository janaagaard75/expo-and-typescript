import Constants from "expo-constants";
import React, { Component } from "react";
import { Text } from "react-native";

export class PlatformScreen extends Component {
  public render() {
    return <Text>{JSON.stringify(Constants.platform, undefined, 2)}</Text>;
  }
}
