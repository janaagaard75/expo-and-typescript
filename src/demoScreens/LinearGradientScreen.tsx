import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";

export const LinearGradientScreen = () => (
  <View
    style={{
      alignItems: "center",
      flex: 1,
      justifyContent: "center",
    }}
  >
    <LinearGradient
      colors={["#f0f", "#ff0"]}
      style={{
        height: 100,
        marginTop: 10,
        width: 100,
      }}
    />
  </View>
);
