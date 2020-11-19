import { BlurView } from "expo-blur";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

const expoImageUrl =
  "https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png";

export const BlurViewScreen = () => (
  <View
    style={{
      alignItems: "center",
      flex: 1,
      justifyContent: "center",
    }}
  >
    {/* This image is blurred because BlurView is positioned on top of it. */}
    <Image
      source={{ uri: expoImageUrl }}
      style={{
        height: 192,
        width: 192,
      }}
    />
    <BlurView intensity={50} style={StyleSheet.absoluteFill} tint="light">
      <Image
        source={{ uri: expoImageUrl }}
        style={{
          height: 96,
          width: 96,
        }}
      />
    </BlurView>
    <Image
      source={{ uri: expoImageUrl }}
      style={{
        height: 48,
        width: 48,
      }}
    />
  </View>
);
