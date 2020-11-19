import * as Font from "expo-font";
import React, { Component } from "react";
import { Text, View } from "react-native";

interface Props {}

interface State {
  fontLoaded: boolean;
}

export class FontScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };

    this.loadFont();
  }

  private async loadFont() {
    await Font.loadAsync({
      "PokerKings-regular": require("../../assets/PokerKings-Regular.ttf"),
    });

    this.setState({
      fontLoaded: true,
    });
  }

  public render() {
    if (!this.state.fontLoaded) {
      return <Text>Loading font...</Text>;
    }

    return (
      <View
        style={{
          alignItems: "center",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "PokerKings-regular",
            fontSize: 48,
            textAlign: "center",
          }}
        >
          PokerKings regular
        </Text>
      </View>
    );
  }
}
