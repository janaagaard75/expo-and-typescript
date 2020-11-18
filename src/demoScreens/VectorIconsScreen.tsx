import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

export const VectorIconsScreen = () => (
  <View
    style={{
      alignItems: "center",
      backgroundColor: "#fff",
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
