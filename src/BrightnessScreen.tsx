import * as Brightness from "expo-brightness";
import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";

interface State {
  normalBrightness: number | undefined;
  systemBrightness: number | undefined;
}

export class BrightnessScreen extends Component<
  NavigationStackScreenProps,
  State
> {
  constructor(props: NavigationStackScreenProps) {
    super(props);

    this.state = {
      normalBrightness: undefined,
      systemBrightness: undefined
    };

    this.updateBrightness();
  }

  public static navigationOptions = {
    title: "Brightness"
  };

  public render() {
    if (this.state.normalBrightness === undefined) {
      return <Text>Getting screen brightness...</Text>;
    }

    return (
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#fff",
          flex: 1,
          justifyContent: "center"
        }}
      >
        <Text style={{ marginBottom: 10 }}>
          Controlling the brightness has been broken on iOS for quite a while
          now. :-/
        </Text>
        <Text>Normal brightness: {this.state.normalBrightness}</Text>
        <Text>System brightness: {this.state.systemBrightness}</Text>
        <View style={{ marginTop: 10 }}>
          <Button onPress={() => this.updateBrightness()} title="Refresh" />
        </View>
        <View style={{ marginTop: 10 }}>
          <Button onPress={this.setNormalBrightness(0)} title="Normal 0%" />
          <Button onPress={this.setNormalBrightness(0.05)} title="Normal 5%" />
          <Button onPress={this.setNormalBrightness(0.5)} title="Normal 50%" />
          <Button onPress={this.setNormalBrightness(1)} title="Normal 100%" />
        </View>
        <View style={{ marginTop: 10 }}>
          <Button onPress={this.setSystemBrightness(0)} title="System 0%" />
          <Button onPress={this.setSystemBrightness(0.05)} title="System 5%" />
          <Button onPress={this.setSystemBrightness(0.5)} title="System 50%" />
          <Button onPress={this.setSystemBrightness(1)} title="System 100%" />
        </View>
      </View>
    );
  }

  private setNormalBrightness(value: number) {
    return async () => {
      await Brightness.setBrightnessAsync(value);
      this.updateBrightness();
    };
  }

  private setSystemBrightness(value: number) {
    return async () => {
      await Brightness.setSystemBrightnessAsync(value);
      this.updateBrightness();
    };
  }

  private async updateBrightness() {
    this.setState({
      normalBrightness: await Brightness.getBrightnessAsync(),
      systemBrightness: await Brightness.getSystemBrightnessAsync()
    });
  }
}
