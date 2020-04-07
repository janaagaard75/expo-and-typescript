import { Subscription } from "@unimodules/core";
import { Accelerometer } from "expo-sensors";
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { ThreeAxisMeasurement } from "./ThreeAxisMeasurement";

interface State {
  accelerometerData: ThreeAxisMeasurement;
}

export class AccelerometerScreen extends Component<
  NavigationStackScreenProps,
  State
> {
  constructor(props: NavigationStackScreenProps) {
    super(props);

    this.state = {
      accelerometerData: {
        x: 0,
        y: 0,
        z: 0,
      },
    };
  }

  public static navigationOptions = {
    title: "Accelerometer",
  };

  private subscription: Subscription | undefined;

  public componentDidMount() {
    this.toggleSubscription();
  }

  public componentWillUnmount() {
    this.unsubscribe();
  }

  public render() {
    const x = AccelerometerScreen.roundToTwoDecimals(
      this.state.accelerometerData.x
    );
    const y = AccelerometerScreen.roundToTwoDecimals(
      this.state.accelerometerData.y
    );
    const z = AccelerometerScreen.roundToTwoDecimals(
      this.state.accelerometerData.z
    );

    return (
      <View
        style={{
          backgroundColor: "#fff",
          marginTop: 15,
          paddingHorizontal: 10,
        }}
      >
        <Text>Accelerometer:</Text>
        <Text>
          x: {x} y: {y} z: {z}
        </Text>
        <View
          style={{
            alignItems: "stretch",
            flexDirection: "row",
            marginTop: 15,
          }}
        >
          <TouchableOpacity
            onPress={() => this.toggleSubscription()}
            style={this.styles.button}
          >
            <Text>Pause</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.slow()}
            style={[this.styles.button, this.styles.middleButton]}
          >
            <Text>Slow</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.fast()}
            style={this.styles.button}
          >
            <Text>Fast</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  private styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: "#eee",
      flex: 1,
      justifyContent: "center",
      padding: 10,
    },
    middleButton: {
      borderColor: "#ccc",
      borderLeftWidth: 1,
      borderRightWidth: 1,
    },
  });

  private static roundToTwoDecimals(value: number | undefined): number {
    if (value === undefined) {
      return 0;
    }

    return Math.floor(value * 100) / 100;
  }

  private fast() {
    Accelerometer.setUpdateInterval(16);
  }

  private slow() {
    Accelerometer.setUpdateInterval(1000);
  }

  private subscribe() {
    this.subscription = Accelerometer.addListener((accelerometerData) => {
      this.setState({ accelerometerData });
    });
  }

  private toggleSubscription() {
    if (this.subscription) {
      this.unsubscribe();
    } else {
      this.subscribe();
    }
  }

  private unsubscribe() {
    if (this.subscription !== undefined) {
      this.subscription.remove();
    }
    this.subscription = undefined;
  }
}
