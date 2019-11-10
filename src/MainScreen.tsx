import * as React from "react";
import { Button, ScrollView } from "react-native";
import { NavigationScreenProp } from "react-navigation";

interface DestinationAndTitle {
  destination: string;
  title?: string;
}

const destinationMappings: Array<DestinationAndTitle> = [
  { destination: "Accelerometer" },
  { destination: "Amplitude" },
  { destination: "Asset" },
  { destination: "Audio" },
  { destination: "BarCodeScanner" },
  { destination: "BlurView1", title: "BlurView 1" },
  { destination: "BlurView2", title: "BlurView 2" },
  { destination: "Brightness" },
  { destination: "Camera" },
  { destination: "Constants" },
  { destination: "Facebook" },
  { destination: "Font" },
  { destination: "Gyroscope" },
  { destination: "LinearGradient" },
  { destination: "LocalAuthentication", title: "Local Authentication" },
  { destination: "MapView" },
  { destination: "Svg" },
  { destination: "VectorIcons", title: "Vector Icons" }
];

export default function MainScreen({ navigate }: NavigationScreenProp<{}>) {
  return (
    <ScrollView
      style={{
        backgroundColor: "#fff",
        flex: 1
      }}
    >
      {destinationMappings.map(destinationAndTitle => (
        <Button
          key={destinationAndTitle.destination}
          onPress={() => navigate(destinationAndTitle.destination)}
          title={destinationAndTitle.title || destinationAndTitle.destination}
        />
      ))}
    </ScrollView>
  );
}
