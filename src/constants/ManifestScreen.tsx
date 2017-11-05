import * as React from 'react'
import { Text } from 'react-native'
import { Component } from 'react'
import { Constants } from 'expo'

export class ManifestScreen extends Component {
  public static navigationOptions = {
    title: 'manifest',
  }

  public render() {
    return (
      <Text>{JSON.stringify(Constants.manifest, undefined, 2)}</Text>
    )
  }
}