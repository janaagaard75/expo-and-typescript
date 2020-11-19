import { Asset } from "expo-asset";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

export const AssetScreen = () => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const wtfsPerMinutePath = "../../assets/wtfs-per-minute.png";

  useEffect(() => {
    const loadAssets = async () => {
      // Preloading is only required for published apps. This app isn't published, so this code has not been tested.
      await Asset.loadAsync(require(wtfsPerMinutePath));
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
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Image
        resizeMode="contain"
        source={require(wtfsPerMinutePath)}
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
