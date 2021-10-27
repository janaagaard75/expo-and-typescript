import * as Amplitude from "expo-analytics-amplitude";
import React, { Component } from "react";
import { Text, View } from "react-native";

interface Props {}

export class AmplitudeScreen extends Component<Props> {
  constructor(props: Props) {
    super(props);

    Amplitude.initializeAsync("31ef1b42450bb6c4372b30524c69b9a9");
    Amplitude.setUserIdAsync("1");
    Amplitude.setUserPropertiesAsync({
      age: 42,
    });
  }

  public render() {
    Amplitude.logEventWithPropertiesAsync("OPEN_SCREEN", {
      screenName: "AmplitudeScreen",
    });

    return (
      <View
        style={{
          alignItems: "center",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text>Logged an event to Amplitude.</Text>
      </View>
    );
  }
}
