import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

// TODO: fix Camera.Constants.Type = any
enum CameraFacingMode {
  BACK = "back",
  FRONT = "front"
}

export default function CameraScreen() {
  const [cameraType, setCameraType] = useState<CameraFacingMode>(
    Camera.Constants.Type.back as CameraFacingMode.BACK
  ); // Camera.Constants.Type.back, TODO
  const [hasPermissionToCamera, setHasPermissionToCamera] = useState<boolean>();

  function toggleCameraType() {
    const { front, back } = Camera.Constants.Type;
    const cameraFacingMode: CameraFacingMode =
      cameraType === back ? front : back;
    setCameraType(cameraFacingMode);
  }

  async function _setPermissionToCamera() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    setHasPermissionToCamera(status === "granted");
  }

  useEffect(() => {
    _setPermissionToCamera();
  }, []);

  if (hasPermissionToCamera === undefined)
    return <Text>Getting permission to access the camera.</Text>;

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
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            onPress={toggleCameraType}
            style={{
              alignItems: "center",
              alignSelf: "flex-end",
              flex: 0.1
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                marginBottom: 10
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
}
