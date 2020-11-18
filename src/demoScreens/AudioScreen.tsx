import { Audio } from "expo-av";
import React, { Component } from "react";
import { Linking, Text, View } from "react-native";

interface Props {}

interface State {
  soundLoaded: boolean;
}

export class AudioScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      soundLoaded: false,
    };

    this.playSound();
  }

  public render() {
    if (!this.state.soundLoaded) {
      return <Text>Loading sound...</Text>;
    }

    return (
      <View
        style={{
          alignItems: "center",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text>
          Music from{" "}
          <Text
            style={{ color: "blue" }}
            onPress={() =>
              Linking.openURL(
                "https://www.bensound.com/royalty-free-music/track/the-jazz-piano"
              )
            }
          >
            www.bensound.com
          </Text>
          .
        </Text>
      </View>
    );
  }

  private async playSound() {
    await Audio.Sound.createAsync(
      require("../../assets/bensound-thejazzpiano.mp3"),
      { shouldPlay: true }
    );

    this.setState({
      soundLoaded: true,
    });
  }
}
