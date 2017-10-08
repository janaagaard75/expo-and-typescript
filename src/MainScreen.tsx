import * as React from 'react'
import { Button } from 'react-native'
import { Component } from 'react'
import { LinearGradient } from 'expo'
import { NavigationScreenProps } from 'react-navigation'
import { View } from 'react-native'

export class MainScreen extends Component<NavigationScreenProps<void>> {
  public static navigationOptions = {
    title: 'Expo and TypeScript'
  }

  public render() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1
        }}
      >
        <Button
          onPress={() => this.props.navigation.navigate('Svg')}
          title="Svg"
        />
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