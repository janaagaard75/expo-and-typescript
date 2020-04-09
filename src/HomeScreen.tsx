import { StackNavigationProp } from "@react-navigation/stack";
import React, { Component } from "react";
import { Button, ScrollView } from "react-native";

type HomeStackParametersList = {
  Accelerometer: undefined;
  Amplitude: undefined;
  Asset: undefined;
  Audio: undefined;
  BarCodeScanner: undefined;
  BlurView: undefined;
  Brightness: undefined;
  Camera: undefined;
  Constants: undefined;
  Facebook: undefined;
  Font: undefined;
  Gyroscope: undefined;
  LinearGradient: undefined;
  LocalAuthentication: undefined;
  MapView: undefined;
  Svg: undefined;
  VectorIcons: undefined;
};

interface Props {
  navigation: StackNavigationProp<HomeStackParametersList>;
}

export class HomeScreen extends Component<Props> {
  public render() {
    return (
      <ScrollView
        style={{
          backgroundColor: "#fff",
          flex: 1,
        }}
      >
        <Button
          onPress={() => this.props.navigation.navigate("Accelerometer")}
          title={"Accelerometer"}
        />
        <Button
          onPress={() => this.props.navigation.navigate("Amplitude")}
          title={"Amplitude"}
        />
        <Button
          onPress={() => this.props.navigation.navigate("Asset")}
          title={"Asset"}
        />
        <Button
          onPress={() => this.props.navigation.navigate("Audio")}
          title={"Audio"}
        />
        <Button
          onPress={() => this.props.navigation.navigate("BarCodeScanner")}
          title={"Bar Code Scanner"}
        />
        <Button
          onPress={() => this.props.navigation.navigate("BlurView")}
          title={"Blur View"}
        />
        <Button
          onPress={() => this.props.navigation.navigate("Brightness")}
          title={"Brightness"}
        />
        <Button
          onPress={() => this.props.navigation.navigate("Camera")}
          title={"Camera"}
        />
        <Button
          onPress={() => this.props.navigation.navigate("Constants")}
          title={"Constants"}
        />
        <Button
          onPress={() => this.props.navigation.navigate("Facebook")}
          title={"Facebook"}
        />
        <Button
          onPress={() => this.props.navigation.navigate("Font")}
          title={"Font"}
        />
        <Button
          onPress={() => this.props.navigation.navigate("Gyroscope")}
          title={"Gyroscope"}
        />
        <Button
          onPress={() => this.props.navigation.navigate("LinearGradient")}
          title={"Linear Gradient"}
        />
        <Button
          onPress={() => this.props.navigation.navigate("LocalAuthentication")}
          title={"Local Authentication"}
        />
        <Button
          onPress={() => this.props.navigation.navigate("MapView")}
          title={"Map View"}
        />
        <Button
          onPress={() => this.props.navigation.navigate("Svg")}
          title={"Svg"}
        />
        <Button
          onPress={() => this.props.navigation.navigate("VectorIcons")}
          title={"Vector Icons"}
        />
      </ScrollView>
    );
  }
}
