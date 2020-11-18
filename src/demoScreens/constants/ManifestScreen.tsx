import Constants from "expo-constants";
import React from "react";
import { ScrollView, Text } from "react-native";

export const ManifestScreen = () => (
  <ScrollView>
    <Text>{JSON.stringify(Constants.manifest, undefined, 2)}</Text>
  </ScrollView>
);
