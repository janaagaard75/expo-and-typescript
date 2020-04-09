import { LinearGradient } from "expo-linear-gradient";
import React, { Component } from "react";
import { View } from "react-native";

export class LinearGradientScreen extends Component {
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
  }
}
