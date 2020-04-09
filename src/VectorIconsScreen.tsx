import { Ionicons } from "@expo/vector-icons";
import React, { Component } from "react";
import { View } from "react-native";

export class VectorIconsScreen extends Component {
  public render() {
    return (
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
  }
}
