import { Asset } from "expo-asset";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";

export default function AssetScreen() {
  const [isAssetsLoading, setIsAssetsLoading] = useState(false);

  async function loadAssets() {
    // This is only required when the app has been published. This app isn't published, so this code hasn't been tested, and it might not be correct.
    setIsAssetsLoading(true);
    await Asset.loadAsync(require("../assets/wtfs-per-minute.png"));
    setIsAssetsLoading(false);
  }
  loadAssets();

  if (isAssetsLoading) {
    return <Text>Loading assets...</Text>;
  }

  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center"
      }}
    >
      <Image
        resizeMode="contain"
        source={require("../assets/wtfs-per-minute.png")}
        style={{
          alignSelf: "stretch",
          flex: 1,
          height: undefined,
          width: undefined
        }}
      />
    </View>
  );
}
