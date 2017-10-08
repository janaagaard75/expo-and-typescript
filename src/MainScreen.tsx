import * as React from 'react'
import { Button } from 'react-native'
import { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { View } from 'react-native'

export class MainScreen extends Component<NavigationScreenProps<void>> {
  public static navigationOptions = {
    title: 'Expo and TypeScript',
  }

  public render() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
        }}
      >
        <Button
          onPress={() => this.props.navigation.navigate('Accelerometer')}
          title="Accelerometer"
        />
        <Button
          onPress={() => this.props.navigation.navigate('LinearGradient')}
          title="LinearGradient"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Svg')}
          title="Svg"
        />
      </View>
    )
  }
}