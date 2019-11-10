import * as Brightness from "expo-brightness";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default function BrightnessScreen() {
  const [normalBrightness, _setNormalBrightness] = useState<number>();
  const [systemBrightness, _setSystemBrightness] = useState<number>();

  function setNormalBrightness(value: number) {
    return async () => {
      await Brightness.setBrightnessAsync(value);
      _setNormalBrightness(await Brightness.getBrightnessAsync());
    };
  }

  function setSystemBrightness(value: number) {
    return async () => {
      await Brightness.setSystemBrightnessAsync(value);
      _setSystemBrightness(await Brightness.getSystemBrightnessAsync());
    };
  }

  async function refreshBrightnesses() {
    _setNormalBrightness(await Brightness.getBrightnessAsync());
    _setSystemBrightness(await Brightness.getSystemBrightnessAsync());
  }

  if (!normalBrightness) return <Text>Getting screen brightness...</Text>;

  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center"
      }}
    >
      <Text style={{ marginBottom: 10 }}>
        Controlling the brightness has been broken on iOS for quite a while now.
        :-/
      </Text>
      <Text>Normal brightness: {normalBrightness}</Text>
      <Text>System brightness: {systemBrightness}</Text>
      <View style={{ marginTop: 10 }}>
        <Button onPress={refreshBrightnesses} title="Refresh" />
      </View>
      <View style={{ marginTop: 10 }}>
        <Button onPress={setNormalBrightness(0)} title="Normal 0%" />
        <Button onPress={setNormalBrightness(0.05)} title="Normal 5%" />
        <Button onPress={setNormalBrightness(0.5)} title="Normal 50%" />
        <Button onPress={setNormalBrightness(1)} title="Normal 100%" />
      </View>
      <View style={{ marginTop: 10 }}>
        <Button onPress={setSystemBrightness(0)} title="System 0%" />
        <Button onPress={setSystemBrightness(0.05)} title="System 5%" />
        <Button onPress={setSystemBrightness(0.5)} title="System 50%" />
        <Button onPress={setSystemBrightness(1)} title="System 100%" />
      </View>
    </View>
  );
}
