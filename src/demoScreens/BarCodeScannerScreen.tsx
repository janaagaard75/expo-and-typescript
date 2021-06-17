import { BarCodeScanner, PermissionStatus } from "expo-barcode-scanner";
import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {}

interface State {
  cameraPermission: PermissionStatus | undefined;
  scannedText: string;
}

export class BarCodeScannerScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      cameraPermission: PermissionStatus.UNDETERMINED,
      scannedText: "Scan a bar code or a QR code.",
    };
  }

  public async componentDidMount() {
    const permissionResponse = await BarCodeScanner.requestPermissionsAsync();
    this.setState({
      cameraPermission: permissionResponse.status,
    });
  }

  public render(): ReactNode {
    switch (this.state.cameraPermission) {
      case undefined:
        return <Text>Requesting permission to access camera.</Text>;

      case PermissionStatus.UNDETERMINED:
        return <Text>Could not determine if camera could be accessed.</Text>;

      case PermissionStatus.DENIED:
        return <Text>No access to the camera.</Text>;

      case PermissionStatus.GRANTED:
        return (
          <View style={{ flex: 1 }}>
            <Text
              style={{
                margin: 10,
              }}
            >
              {this.state.scannedText}
            </Text>
            <View style={{ flex: 1 }}>
              <BarCodeScanner
                onBarCodeScanned={this.handleBarCodeScanned}
                style={StyleSheet.absoluteFill}
              />
            </View>
          </View>
        );
    }
  }

  private handleBarCodeScanned = (event: { type: string; data: string }) => {
    this.setState({
      scannedText: `Scanned a code of type ${event.type} with the content '${event.data}'.`,
    });
  };
}
