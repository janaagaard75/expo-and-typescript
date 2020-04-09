import { StackNavigationProp } from "@react-navigation/stack";
import Constants from "expo-constants";
import React, { Component } from "react";
import { Button, Text, View } from "react-native";

type ConstantsStackParametersList = {
  Manifest: undefined;
  Platform: undefined;
  SystemFonts: undefined;
};

interface Props {
  navigation: StackNavigationProp<ConstantsStackParametersList>;
}

interface State {
  webViewUserAgent: string | null;
}

export class ConstantsScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      webViewUserAgent: null,
    };

    this.updateWebViewUserAgent();
  }

  public render() {
    const navigate = this.props.navigation.navigate;

    return (
      <View
        style={{
          flex: 1,
          padding: 10,
        }}
      >
        <Button onPress={() => navigate("Manifest")} title="Manifest" />
        <Button onPress={() => navigate("Platform")} title="Platform" />
        <Button onPress={() => navigate("SystemFonts")} title="System Fonts" />
        <Text>appOwnership: "{Constants.appOwnership}"</Text>
        <Text>deviceId: "{Constants.deviceId}"</Text>
        <Text>deviceName: "{Constants.deviceName}"</Text>
        <Text>deviceYearClass: {Constants.deviceYearClass}</Text>
        <Text>expoVersion: "{Constants.expoVersion}"</Text>
        <Text>isDevice: {Constants.isDevice}</Text>
        <Text>linkingUri: "{Constants.linkingUri}"</Text>
        <Text>sessionId: "{Constants.sessionId}"</Text>
        <Text>statusBarHeight: {Constants.statusBarHeight}</Text>
        <Text>webViewUserAgent: "{this.state.webViewUserAgent}"</Text>
      </View>
    );
  }

  private async updateWebViewUserAgent() {
    const userAgent = await Constants.getWebViewUserAgentAsync();
    this.setState({
      webViewUserAgent: userAgent,
    });
  }
}
