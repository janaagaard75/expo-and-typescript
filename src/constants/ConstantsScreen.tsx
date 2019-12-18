import Constants from "expo-constants";
import * as React from "react";
import { Component } from "react";
import { Text, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";

interface State {
  webViewUserAgent: string | null;
}

export class ConstantsScreen extends Component<NavigationScreenProps, State> {
  constructor(props: NavigationScreenProps) {
    super(props);

    this.state = {
      webViewUserAgent: null
    };

    this.updateWebViewUserAgent();
  }

  public static navigationOptions = {
    title: "Constants"
  };

  public render() {
    const navigate = this.props.navigation.navigate;

    return (
      <View
        style={{
          flex: 1,
          padding: 10
        }}
      >
        <Text>appOwnership: "{Constants.appOwnership}"</Text>
        <Text>deviceId: "{Constants.deviceId}"</Text>
        <Text>deviceName: "{Constants.deviceName}"</Text>
        <Text>deviceYearClass: {Constants.deviceYearClass}</Text>
        <Text>expoVersion: "{Constants.expoVersion}"</Text>
        <Text>isDevice: {Constants.isDevice}</Text>
        <Text>linkingUri: "{Constants.linkingUri}"</Text>
        <Text onPress={() => navigate("Manifest")}>
          manifest: (Click to see)
        </Text>
        <Text onPress={() => navigate("Platform")}>
          platform: (Click to see)
        </Text>
        <Text>sessionId: "{Constants.sessionId}"</Text>
        <Text>statusBarHeight: {Constants.statusBarHeight}</Text>
        <Text onPress={() => navigate("SystemFonts")}>
          systemFonts: (Click to see)
        </Text>
        <Text>webViewUserAgent: "{this.state.webViewUserAgent}"</Text>
      </View>
    );
  }

  private async updateWebViewUserAgent() {
    const userAgent = await Constants.getWebViewUserAgentAsync();
    this.setState({
      webViewUserAgent: userAgent
    });
  }
}
