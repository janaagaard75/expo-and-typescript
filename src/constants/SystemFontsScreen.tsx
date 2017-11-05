import * as React from 'react'
import { Text } from 'react-native'
import { Component } from 'react'
import { Constants } from 'expo'

export class SystemFontsScreen extends Component {
  public static navigationOptions = {
    title: 'systemFonts',
  }

  public render() {
    return (
      Constants.systemFonts.map((systemFont, index) =>
        <Text key={index}>{systemFont}</Text>,
      )
    )
  }
}