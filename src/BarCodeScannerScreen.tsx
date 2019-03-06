import * as React from 'react'
import { BarCodeScanner } from 'expo'
import { Permissions } from 'expo'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'

enum PermissionState {
  Unknown,
  Denied,
  Granted
}

interface State {
  cameraPermission: PermissionState
  scannedText: string
}

export class BarCodeScannerScreen extends React.Component<{}, State> {
  constructor(props: {}, context?: any) {
    super(props, context)

    this.state = {
      cameraPermission: PermissionState.Unknown,
      scannedText: 'Scan a bar code or a QR code.'
    }
  }

  public static navigationOptions = {
    title: 'BarCodeScanner'
  }

  public async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      cameraPermission:
        status === 'granted' ? PermissionState.Granted : PermissionState.Denied
    })
  }

  public render() {
    switch (this.state.cameraPermission) {
      case PermissionState.Unknown:
        return <Text>Requesting for camera permission.</Text>

      case PermissionState.Denied:
        return <Text>No access to the camera.</Text>

      case PermissionState.Granted:
        return (
          <View style={{ flex: 1 }}>
            <Text
              style={{
                margin: 10
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
        )

      default:
        const _: never = this.state.cameraPermission
        return _
    }
  }

  private handleBarCodeScanned = ({ type, data }: any) => {
    this.setState({
      scannedText: `A bar code of type ${type} with content '${data}' has been scanned.`
    })
  }
}
