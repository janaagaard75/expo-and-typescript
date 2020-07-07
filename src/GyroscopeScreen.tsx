import { Subscription } from "@unimodules/core";
import { Gyroscope, ThreeAxisMeasurement } from "expo-sensors";
import React, { Component } from "react";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";

interface Props {}

interface State {
  gyroscopeData: ThreeAxisMeasurement;
}

export class GyroscopeScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      gyroscopeData: {
        x: 0,
        y: 0,
        z: 0,
      },
    };
  }

  private subscription: Subscription | undefined;

  private buttonStyle: ViewStyle = {
    alignItems: "center",
    backgroundColor: "#eee",
    flex: 1,
    justifyContent: "center",
    padding: 10,
  };

  private buttonContainerStyle: ViewStyle = {
    alignItems: "stretch",
    flexDirection: "row",
    marginTop: 15,
  };

  private middleButtonStyle: ViewStyle = {
    borderColor: "#ccc",
    borderLeftWidth: 1,
    borderRightWidth: 1,
  };

  private sensorStyle: ViewStyle = {
    marginTop: 15,
    paddingHorizontal: 10,
  };

  public componentDidMount() {
    this.toggleSubscription();
  }

  public componentWillUnmount() {
    this.unsubscribe();
  }

  public render() {
    const x = GyroscopeScreen.round(this.state.gyroscopeData.x);
    const y = GyroscopeScreen.round(this.state.gyroscopeData.y);
    const z = GyroscopeScreen.round(this.state.gyroscopeData.z);

    return (
      <View style={this.sensorStyle}>
        <Text>Gyroscope:</Text>
        <Text
          style={{
            fontSize: 20,
          }}
        >
          x: {x} y: {y} z: {z}
        </Text>

        <View style={this.buttonContainerStyle}>
          <TouchableOpacity
            onPress={() => this.toggleSubscription()}
            style={this.buttonStyle}
          >
            <Text>Pause</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.useLongUpdateInterval()}
            style={[this.buttonStyle, this.middleButtonStyle]}
          >
            <Text>Slow</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.useShortUpdateInterval()}
            style={this.buttonStyle}
          >
            <Text>Fast</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  private toggleSubscription() {
    if (this.subscription === undefined) {
      this.subscribe();
    } else {
      this.unsubscribe();
    }
  }

  private useLongUpdateInterval() {
    Gyroscope.setUpdateInterval(1000);
  }

  private useShortUpdateInterval() {
    const framesPerSecond = 60;
    Gyroscope.setUpdateInterval(1000 / framesPerSecond);
  }

  private subscribe() {
    this.subscription = Gyroscope.addListener((result) => {
      this.setState({ gyroscopeData: result });
    });
  }

  private unsubscribe() {
    if (this.subscription) {
      this.subscription.remove();
    }

    this.subscription = undefined;
  }

  private static round(n: number | undefined) {
    if (!n) {
      return 0;
    }

    return Math.floor(n * 100) / 100;
  }
}
