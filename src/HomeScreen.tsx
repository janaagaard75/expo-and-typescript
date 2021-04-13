import { StackNavigationProp } from "@react-navigation/stack";
import React, { Component } from "react";
import { Button, ScrollView } from "react-native";

type HomeStackParametersList = {
  Accelerometer: undefined;
  Amplitude: undefined;
  AppleAuthentication: undefined;
  Asset: undefined;
  Audio: undefined;
  BarCodeScanner: undefined;
  BlurView: undefined;
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
    const navigate = this.props.navigation.navigate;

    return (
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <Button
          onPress={() => navigate("Accelerometer")}
          title={"Accelerometer"}
        />
        <Button onPress={() => navigate("Amplitude")} title={"Amplitude"} />
        <Button
          onPress={() => navigate("AppleAuthentication")}
          title={"Apple Authentication"}
        />
        <Button onPress={() => navigate("Asset")} title={"Asset"} />
        <Button onPress={() => navigate("Audio")} title={"Audio"} />
        <Button
          onPress={() => navigate("BarCodeScanner")}
          title={"Bar Code Scanner"}
        />
        <Button onPress={() => navigate("BlurView")} title={"Blur View"} />
        <Button onPress={() => navigate("Camera")} title={"Camera"} />
        <Button onPress={() => navigate("Constants")} title={"Constants"} />
        <Button onPress={() => navigate("Facebook")} title={"Facebook"} />
        <Button onPress={() => navigate("Font")} title={"Font"} />
        <Button onPress={() => navigate("Gyroscope")} title={"Gyroscope"} />
        <Button
          onPress={() => navigate("LinearGradient")}
          title={"Linear Gradient"}
        />
        <Button
          onPress={() => navigate("LocalAuthentication")}
          title={"Local Authentication"}
        />
        <Button onPress={() => navigate("MapView")} title={"Map View"} />
        <Button onPress={() => navigate("Svg")} title={"Svg"} />
        <Button
          onPress={() => navigate("VectorIcons")}
          title={"Vector Icons"}
        />
      </ScrollView>
    );
  }
}
