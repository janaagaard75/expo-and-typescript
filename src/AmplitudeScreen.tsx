import * as React from 'react'
import { Amplitude } from 'expo'
import { Component } from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'

export class AmplitudeScreen extends Component {
  constructor(props: {}, context?: any) {
    super(props, context)

    Amplitude.initialize('31ef1b42450bb6c4372b30524c69b9a9')
    Amplitude.setUserId('1')
    Amplitude.setUserProperties({
      'age': 42
    })
  }

  public static navigationOptions = {
    title: 'Amplitude'
  }

  public render() {
    Amplitude.logEventWithProperties('OPEN_SCREEN', {
      'screenName': 'AmplitudeScreen'
    })

    return (
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center'
        }}
      >
        <Text>Logged an event to Amplitude.</Text>
      </View>
    )
  }
}