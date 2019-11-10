import Constants from "expo-constants";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";

type WebViewUserAgent = string | null;

export default function ConstantsScreen({
  navigate
}: NavigationScreenProp<{}>) {
  const [webViewUserAgent, setWebViewUserAgent] = useState<WebViewUserAgent>(
    null
  );

  async function updateWebViewUserAgent() {
    const userAgent = await Constants.getWebViewUserAgentAsync();
    setWebViewUserAgent(userAgent);
  }
  updateWebViewUserAgent();

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text>appOvernership: "{Constants.appOwnership}"</Text>
      <Text>deviceId: "{Constants.deviceId}"</Text>
      <Text>deviceName: "{Constants.deviceName}"</Text>
      <Text>deviceYearClass: {Constants.deviceYearClass}</Text>
      <Text>expoVersion: "{Constants.expoVersion}"</Text>
      <Text>isDevice: {Constants.isDevice}</Text>
      <Text>linkingUri: "{Constants.linkingUri}"</Text>
      <Text>sessionId: "{Constants.sessionId}"</Text>
      <Text>statusBarHeight: {Constants.statusBarHeight}</Text>
      <Text>webViewUserAgent: "{webViewUserAgent}"</Text>
      <Text onPress={() => navigate("Manifest")}>manifest: (Click to see)</Text>
      <Text onPress={() => navigate("Platform")}>platform: (Click to see)</Text>
      <Text onPress={() => navigate("SystemFonts")}>
        systemFonts: (Click to see)
      </Text>
    </View>
  );
}
