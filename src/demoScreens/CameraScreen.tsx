import { Camera, PermissionStatus } from "expo-camera";
import { CameraType } from "expo-camera/build/Camera.types";
import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {}

interface State {
  cameraType: keyof typeof CameraType;
  hasPermissionToCamera: boolean | undefined;
}

export class CameraScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      cameraType: CameraType.back,
      hasPermissionToCamera: undefined,
    };
  }

  public async componentDidMount() {
    const { status } = await Camera.requestPermissionsAsync();

    this.setState({
      hasPermissionToCamera: status === PermissionStatus.GRANTED,
    });
  }

  public render() {
    if (this.state.hasPermissionToCamera === undefined) {
      return <Text>Getting permission to access the camera.</Text>;
    }

    if (this.state.hasPermissionToCamera === false) {
      return <Text>No access to the camera.</Text>;
    }

    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={this.state.cameraType}>
          <View
            style={{
              backgroundColor: "transparent",
              flex: 1,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => this.toggleCameraType()}
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
  }

  private toggleCameraType() {
    this.setState({
      cameraType: this.state.cameraType === "back" ? "front" : "back",
    });
  }
}
