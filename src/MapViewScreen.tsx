import * as React from 'react'
import { Component } from 'react'
import { Text } from 'react-native'
// import { MapView } from 'expo'

export class MapViewScreen extends Component {
  public static navigationOptions = {
    title: 'MapView'
  }

  public render() {
    return (
      <Text>
        MapView doesn't yet exit in @types/expo. :-/
      </Text>
      // <MapView
      //   style={{ flex: 1 }}
      //   initialRegion={{
      //     latitude: 55.6838499,
      //     latitudeDelta: 0.1,
      //     longitude: 12.5630238,
      //     longitudeDelta: 0.1
      //   }}
      // />
    )
  }
}