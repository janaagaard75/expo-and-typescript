import * as React from 'react'
import { Component } from 'react'
import { LinearGradient } from 'expo'
import { NavigationScreenProps } from 'react-navigation'
import { View } from 'react-native'

export class LinearGradientScreen extends Component<NavigationScreenProps> {
  public static navigationOptions = {
    title: 'LinearGradient'
  }

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