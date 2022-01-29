import Constants from "expo-constants";
import { Text } from "react-native";

export const PlatformScreen = () => (
  <Text>{JSON.stringify(Constants.platform, undefined, 2)}</Text>
);
