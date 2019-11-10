import { Audio } from "expo-av";
import React, { useState } from "react";
import { Linking, Text, View } from "react-native";

export default function AudioScreen() {
  const [isSoundLoading, setIsSoundLoading] = useState(false);

  async function playSound() {
    setIsSoundLoading(true);
    await Audio.Sound.createAsync(
      require("../assets/bensound-thejazzpiano.mp3"),
      {
        shouldPlay: true
      }
    );
    setIsSoundLoading(false);
  }
  playSound();

  if (isSoundLoading) {
    return <Text>Loading sound...</Text>;
  }

  return (
    <View
      style={{
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
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
