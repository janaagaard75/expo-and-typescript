import * as React from 'react'
import { Component } from 'react'
import { Brightness } from 'expo'
import { NavigationScreenProps } from 'react-navigation'
import { Text } from 'react-native'
import { View } from 'react-native'

interface State {
  brightness: number | undefined
  systemBrightness: number | undefined
}

export class BrightnessScreen extends Component<NavigationScreenProps<void>, State> {
  constructor(props: NavigationScreenProps<void>, context?: any) {
    super(props, context)

    this.state = {
      brightness: undefined,
      systemBrightness: undefined,
    }

    this.updateBrightness()
  }

  public static navigationOptions = {
    title: 'Brightness',
  }

  public render() {
    if (this.state.brightness === undefined) {
      return (
        <Text>Getting screen brightness...</Text>
      )
    }

    return (
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Text>Brightness: {this.state.brightness}</Text>
        <Text>System brightness: {this.state.systemBrightness}</Text>
      </View>
    )
  }

  private async updateBrightness() {
    this.setState({
      brightness: await Brightness.getBrightnessAsync(),
      systemBrightness: await Brightness.getSystemBrightnessAsync(),
    })
  }
}