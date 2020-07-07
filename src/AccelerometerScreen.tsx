import { Subscription } from "@unimodules/core";
import { Accelerometer, ThreeAxisMeasurement } from "expo-sensors";
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {}

interface State {
  accelerometerData: ThreeAxisMeasurement;
}

export class AccelerometerScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      accelerometerData: {
        x: 0,
        y: 0,
        z: 0,
      },
    };
  }

  private subscription: Subscription | undefined;

  public componentDidMount() {
    this.subscribe();
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
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            alignItems: "stretch",
            alignSelf: "center",
            flexDirection: "row",
            marginBottom: 15,
            marginTop: 15,
            width: 200,
          }}
        >
          <Text style={{ flex: 1 }}>x: {x}</Text>
          <Text style={{ flex: 1 }}>y: {y}</Text>
          <Text style={{ flex: 1 }}>z: {z}</Text>
        </View>
        <View
          style={{
            alignItems: "stretch",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => this.toggleSubscription()}
            style={this.styles.button}
          >
            <Text>Play/Pause</Text>
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
    const framesPerSecond = 60;
    Accelerometer.setUpdateInterval(Math.floor(1000 / framesPerSecond));
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
