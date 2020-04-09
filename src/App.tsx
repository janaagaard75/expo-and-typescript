import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { AccelerometerScreen } from "./AccelerometerScreen";
import { AmplitudeScreen } from "./AmplitudeScreen";
import { AssetScreen } from "./AssetScreen";
import { BlurViewScreen } from "./BlurViewScreen";
import { BrightnessScreen } from "./BrightnessScreen";
import { CameraScreen } from "./CameraScreen";
import { ConstantsScreen } from "./constants/ConstantsScreen";
import { ManifestScreen } from "./constants/ManifestScreen";
import { PlatformScreen } from "./constants/PlatformScreen";
import { SystemFontsScreen } from "./constants/SystemFontsScreen";
import { FacebookScreen } from "./FacebookScreen";
import { FontScreen } from "./FontScreen";
import { GyroscopeScreen } from "./GyroscopeScreen";
import { HomeScreen } from "./HomeScreen";
import { LinearGradientScreen } from "./LinearGradientScreen";
import { LocalAuthenticationScreen } from "./LocalAuthenticationScreen";
import { MapViewScreen } from "./MapViewScreen";
import { SvgScreen } from "./SvgScreen";
import { VectorIconsScreen } from "./VectorIconsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Accelerometer"
          component={AccelerometerScreen}
          options={{ title: "Accelerometer" }}
        />
        <Stack.Screen
          name="Amplitude"
          component={AmplitudeScreen}
          options={{ title: "Amplitude" }}
        />
        <Stack.Screen
          name="Asset"
          component={AssetScreen}
          options={{ title: "Aar Code Scanner" }}
        />
        <Stack.Screen
          name="BlurView"
          component={BlurViewScreen}
          options={{ title: "Blur View" }}
        />
        <Stack.Screen
          name="Brightness"
          component={BrightnessScreen}
          options={{ title: "Brightness" }}
        />
        <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{ title: "Camera" }}
        />
        <Stack.Screen
          name="Constants"
          component={ConstantsScreen}
          options={{ title: "Constants" }}
        />
        <Stack.Screen
          name="Facebook"
          component={FacebookScreen}
          options={{ title: "Facebook" }}
        />
        <Stack.Screen
          name="Font"
          component={FontScreen}
          options={{ title: "Font" }}
        />
        <Stack.Screen
          name="Gyroscope"
          component={GyroscopeScreen}
          options={{ title: "Gyroscope" }}
        />
        <Stack.Screen
          name="LinearGradient"
          component={LinearGradientScreen}
          options={{ title: "Linear Gradient" }}
        />
        <Stack.Screen
          name="LocalAuthentication"
          component={LocalAuthenticationScreen}
          options={{ title: "Local Authentication" }}
        />
        <Stack.Screen
          name="Manifest"
          component={ManifestScreen}
          options={{ title: "Manifest" }}
        />
        <Stack.Screen
          name="MapView"
          component={MapViewScreen}
          options={{ title: "Map View" }}
        />
        <Stack.Screen
          name="Platform"
          component={PlatformScreen}
          options={{ title: "Platform" }}
        />
        <Stack.Screen
          name="Svg"
          component={SvgScreen}
          options={{ title: "Svg" }}
        />
        <Stack.Screen
          name="SystemFonts"
          component={SystemFontsScreen}
          options={{ title: "System Fonts" }}
        />
        <Stack.Screen
          name="VectorIcons"
          component={VectorIconsScreen}
          options={{ title: "Vector Icons" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
