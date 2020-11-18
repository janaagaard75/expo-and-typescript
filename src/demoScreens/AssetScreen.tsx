import { Asset } from "expo-asset";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

export const AssetScreen = () => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    const loadAssets = async () => {
      // This is only required when the app has been published. This app isn't published, so this code hasn't been tested, and it might not be correct.
      await Asset.loadAsync(require("../../assets/wtfs-per-minute.png"));
      setAssetsLoaded(true);
    };
    loadAssets();
  }, []);

  if (!assetsLoaded) {
    return <Text>Loading assets...</Text>;
  }

  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Image
        resizeMode="contain"
        source={require("../../assets/wtfs-per-minute.png")}
        style={{
          alignSelf: "stretch",
          flex: 1,
          height: undefined,
          width: undefined,
        }}
      />
    </View>
  );
};
