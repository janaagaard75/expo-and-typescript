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
    const navigate = this.props.navigation.navigate

    return (
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
        }}
      >
        <Button
          onPress={() => navigate('Accelerometer')}
          title="Accelerometer"
        />
        <Button
          onPress={() => navigate('LinearGradient')}
          title="LinearGradient"
        />
        <Button
          onPress={() => navigate('BlurView1')}
          title="BlurView 1"
        />
        <Button
          onPress={() => navigate('BlurView2')}
          title="BlurView 2"
        />
        <Button
          onPress={() => navigate('MapView')}
          title="MapView"
        />
        <Button
          onPress={() => navigate('Svg')}
          title="Svg"
        />
      </View>
    )
  }
}