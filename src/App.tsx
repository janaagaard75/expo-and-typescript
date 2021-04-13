import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { AccelerometerScreen } from "./demoScreens/AccelerometerScreen";
import { AmplitudeScreen } from "./demoScreens/AmplitudeScreen";
import { AppleAuthenticationScreen } from "./demoScreens/AppleAuthenticationScreen";
import { AssetScreen } from "./demoScreens/AssetScreen";
import { AudioScreen } from "./demoScreens/AudioScreen";
import { BarCodeScannerScreen } from "./demoScreens/BarCodeScannerScreen";
import { BlurViewScreen } from "./demoScreens/BlurViewScreen";
import { CameraScreen } from "./demoScreens/CameraScreen";
import { ConstantsScreen } from "./demoScreens/constants/ConstantsScreen";
import { ManifestScreen } from "./demoScreens/constants/ManifestScreen";
import { PlatformScreen } from "./demoScreens/constants/PlatformScreen";
import { SystemFontsScreen } from "./demoScreens/constants/SystemFontsScreen";
import { FacebookScreen } from "./demoScreens/FacebookScreen";
import { FontScreen } from "./demoScreens/FontScreen";
import { GyroscopeScreen } from "./demoScreens/GyroscopeScreen";
import { LinearGradientScreen } from "./demoScreens/LinearGradientScreen";
import { LocalAuthenticationScreen } from "./demoScreens/LocalAuthenticationScreen";
import { MapViewScreen } from "./demoScreens/MapViewScreen";
import { SvgScreen } from "./demoScreens/SvgScreen";
import { VectorIconsScreen } from "./demoScreens/VectorIconsScreen";
import { HomeScreen } from "./HomeScreen";

const Stack = createStackNavigator();

export const App = () => {
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
          name="AppleAuthentication"
          component={AppleAuthenticationScreen}
          options={{ title: "Apple Authentication" }}
        />
        <Stack.Screen
          name="Asset"
          component={AssetScreen}
          options={{ title: "Asset" }}
        />
        <Stack.Screen
          name="Audio"
          component={AudioScreen}
          options={{ title: "Audio" }}
        />
        <Stack.Screen
          name="BarCodeScanner"
          component={BarCodeScannerScreen}
          options={{ title: "Bar Code Scanner" }}
        />
        <Stack.Screen
          name="BlurView"
          component={BlurViewScreen}
          options={{ title: "Blur View" }}
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
};
