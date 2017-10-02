import * as React from 'react'
import { LinearGradient } from 'expo'
import { Text } from 'react-native'
import { View } from 'react-native'

export default class App extends React.Component {
  public render() {
    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#fff',
          flex: 1,
          justifyContent: 'center'
        }}
      >
        <Text>Open up App.tsx to start working on your app!</Text>
        <LinearGradient
          colors={['#f0f', '#ff0']}
          style={{
            height: 100,
            marginTop: 10,
            width: 100
          }}
        />
      </View>
    )
  }
}