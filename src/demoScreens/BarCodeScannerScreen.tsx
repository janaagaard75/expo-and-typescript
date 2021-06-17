import { BarCodeScanner, PermissionStatus } from "expo-barcode-scanner";
import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {}

interface State {
  cameraPermission: PermissionStatus;
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
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    this.setState({
      cameraPermission:
        status === PermissionStatus.GRANTED
          ? PermissionStatus.GRANTED
          : PermissionStatus.DENIED,
    });
  }

  public render(): ReactNode {
    switch (this.state.cameraPermission) {
      case PermissionStatus.UNDETERMINED:
        return <Text>Requesting for camera permission.</Text>;

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
