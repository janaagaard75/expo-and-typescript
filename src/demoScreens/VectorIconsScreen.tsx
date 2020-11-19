import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

export const VectorIconsScreen = () => (
  <View
    style={{
      alignItems: "center",
      flex: 1,
      justifyContent: "center",
    }}
  >
    <Ionicons
      color="green"
      name="md-checkmark-circle"
      size={100}
      style={{
        textDecorationColor: "black",
        textDecorationLine: "underline",
        textDecorationStyle: "double",
      }}
    />
  </View>
);
