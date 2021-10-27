import { Camera, PermissionStatus } from "expo-camera";
import { CameraType } from "expo-camera/build/Camera.types";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const CameraScreen = () => {
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [hasPermissionToCamera, setHasPermissionToCamera] = useState<
    boolean | undefined
  >(undefined);

  useEffect(() => {
    const getPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermissionToCamera(status === PermissionStatus.GRANTED);
    };

    getPermission();
  }, []);

  const toggleCameraType = () => {
    setCameraType(
      cameraType === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  if (hasPermissionToCamera === undefined) {
    return <Text>Getting permission to access the camera.</Text>;
  }

  if (hasPermissionToCamera === false) {
    return <Text>No access to the camera.</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={cameraType}>
        <View
          style={{
            backgroundColor: "transparent",
            flex: 1,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => toggleCameraType()}
            style={{
              alignItems: "center",
              alignSelf: "flex-end",
              flex: 0.1,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                marginLeft: 5,
                marginBottom: 10,
              }}
            >
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};
