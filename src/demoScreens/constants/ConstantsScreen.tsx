import { StackNavigationProp } from "@react-navigation/stack";
import Constants from "expo-constants";
import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

type ConstantsStackParametersList = {
  Manifest: undefined;
  Platform: undefined;
  SystemFonts: undefined;
};

interface Props {
  navigation: StackNavigationProp<ConstantsStackParametersList>;
}

export const ConstantsScreen = (props: Props) => {
  const [webViewUserAgent, setWebViewUserAgent] =
    useState<string>("(fetching...)");

  useEffect(() => {
    const updateWebViewUserAgent = async () => {
      const userAgent =
        (await Constants.getWebViewUserAgentAsync()) ?? "(unknown)";
      setWebViewUserAgent(userAgent);
    };
    updateWebViewUserAgent();
  }, []);

  const navigate = props.navigation.navigate;

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
      <Text>isDevice: {Constants.isDevice.toString()}</Text>
      <Text>linkingUri: "{Constants.linkingUri}"</Text>
      <Text>sessionId: "{Constants.sessionId}"</Text>
      <Text>statusBarHeight: {Constants.statusBarHeight}</Text>
      <Text>webViewUserAgent: "{webViewUserAgent}"</Text>
    </View>
  );
};
