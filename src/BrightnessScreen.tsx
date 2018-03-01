import * as React from 'react'
import { Component } from 'react'
import { Button } from 'react-native'
import { Brightness } from 'expo'
import { NavigationScreenProps } from 'react-navigation'
import { Text } from 'react-native'
import { View } from 'react-native'

interface State {
  normalBrightness: number | undefined
  systemBrightness: number | undefined
}

export class BrightnessScreen extends Component<NavigationScreenProps, State> {
  constructor(props: NavigationScreenProps, context?: any) {
    super(props, context)

    this.state = {
      normalBrightness: undefined,
      systemBrightness: undefined
    }

    this.updateBrightness()
  }

  public static navigationOptions = {
    title: 'Brightness'
  }

  public render() {
    if (this.state.normalBrightness === undefined) {
      return (
        <Text>Getting screen brightness...</Text>
      )
    }

    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#fff',
          flex: 1,
          justifyContent: 'center'
        }}
      >
        <Text>Normal brightness: {this.state.normalBrightness}</Text>
        <Text>System brightness: {this.state.systemBrightness}</Text>
        <View style={{ marginTop: 10 }}>
          <Button
            onPress={() => this.updateBrightness()}
            title="Refresh"
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Button
            onPress={() => this.setNormalBrightness(0)}
            title="Normal 0%"
          />
          <Button
            onPress={() => this.setNormalBrightness(0.5)}
            title="Normal 50%"
          />
          <Button
            onPress={() => this.setNormalBrightness(1)}
            title="Normal 100%"
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Button
            onPress={() => this.setSystemBrightness(0)}
            title="System 0%"
          />
          <Button
            onPress={() => this.setSystemBrightness(0.5)}
            title="System 50%"
          />
          <Button
            onPress={() => this.setSystemBrightness(1)}
            title="System 100%"
          />
        </View>
      </View>
    )
  }

  private async setNormalBrightness(value: number) {
    await Brightness.setBrightnessAsync(value)
    this.updateBrightness()
  }

  private async setSystemBrightness(value: number) {
    await Brightness.setSystemBrightnessAsync(value)
    this.updateBrightness()
  }

  private async updateBrightness() {
    this.setState({
      normalBrightness: await Brightness.getBrightnessAsync(),
      systemBrightness: await Brightness.getSystemBrightnessAsync()
    })
  }
}