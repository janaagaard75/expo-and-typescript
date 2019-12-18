import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { Component } from "react";
import { View } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";

export class LinearGradientScreen extends Component<
  NavigationStackScreenProps
> {
  public static navigationOptions = {
    title: "LinearGradient"
  };

  public render() {
    return (
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#fff",
          flex: 1,
          justifyContent: "center"
        }}
      >
        <LinearGradient
          colors={["#f0f", "#ff0"]}
          style={{
            height: 100,
            marginTop: 10,
            width: 100
          }}
        />
      </View>
    );
  }
}
