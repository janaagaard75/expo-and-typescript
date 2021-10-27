import * as Amplitude from "expo-analytics-amplitude";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

export const AmplitudeScreen = () => {
  const [isInitialized, setIsInitialized] = React.useState(false);

  useEffect(() => {
    const initializeAmplitude = async () => {
      await Amplitude.initializeAsync("31ef1b42450bb6c4372b30524c69b9a9");
      await Amplitude.setUserIdAsync("1");
      await Amplitude.setUserPropertiesAsync({
        age: 42,
      });
      setIsInitialized(true);
    };

    initializeAmplitude();
  }, []);

  useEffect(() => {
    if (!isInitialized) {
      return;
    }

    Amplitude.logEventWithPropertiesAsync("OPEN_SCREEN", {
      screenName: "AmplitudeScreen",
    });
  }, [isInitialized]);

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
};
