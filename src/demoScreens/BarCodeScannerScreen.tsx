import { BarCodeScanner } from "expo-barcode-scanner";
import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {}

enum PermissionState {
  Unknown,
  Denied,
  Granted,
}

interface State {
  cameraPermission: PermissionState;
  scannedText: string;
}

export class BarCodeScannerScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      cameraPermission: PermissionState.Unknown,
      scannedText: "Scan a bar code or a QR code.",
    };
  }

  public async componentDidMount() {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    this.setState({
      cameraPermission:
        status === "granted" ? PermissionState.Granted : PermissionState.Denied,
    });
  }

  public render(): ReactNode {
    switch (this.state.cameraPermission) {
      case PermissionState.Unknown:
        return <Text>Requesting for camera permission.</Text>;

      case PermissionState.Denied:
        return <Text>No access to the camera.</Text>;

      case PermissionState.Granted:
        return (
          <View style={{ flex: 1 }}>
            <Text
              style={{
                margin: 10,
              }}
            >
              this.state.scannerStatus
            </Text>
            <View style={{ flex: 1 }}>
              <BarCodeScanner
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
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
      scannedText: `A bar code of type ${event.type} with content '${event.data}' has been scanned.`,
    });
  };
}
