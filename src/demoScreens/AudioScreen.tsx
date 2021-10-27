import { Audio } from "expo-av";
import React, { useEffect, useState } from "react";
import { Linking, Text, View } from "react-native";

export const AudioScreen = () => {
  const [soundLoaded, setSoundLoaded] = useState(false);

  useEffect(() => {
    playSound();
  }, []);

  const playSound = async () => {
    await Audio.Sound.createAsync(
      require("../../assets/bensound-thejazzpiano.mp3"),
      {
        shouldPlay: true,
      }
    );

    setSoundLoaded(true);
  };

  if (!soundLoaded) {
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
};
