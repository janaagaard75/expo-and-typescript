import * as React from 'react'
import { Component } from 'react'
import { Text } from 'react-native'
import { Util } from 'expo'
import { View } from 'react-native'

interface State {
  country: string,
  locale: string,
  timeZone: string
}

export class UtilScreen extends Component<{}, State> {
  constructor(props: {}, context?: any) {
    super(props, context)

    this.state = {
      country: '',
      locale: '',
      timeZone: ''
    }

    this.updateState()
  }

  public static navigationOptions = {
    title: 'Util'
  }

  public render() {
    return (
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center'
        }}
      >
        <Text>Country: {this.state.country}</Text>
        <Text>Locale: {this.state.locale}</Text>
        <Text>Time zone: {this.state.timeZone}</Text>
      </View>
    )
  }

  private async updateState() {
    this.setState({
      country: await Util.getCurrentDeviceCountryAsync(),
      locale: await Util.getCurrentLocaleAsync(),
      timeZone: await Util.getCurrentTimeZoneAsync()
    })
  }
}