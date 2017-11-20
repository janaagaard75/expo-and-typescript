import * as React from 'react'
import { Button } from 'react-native'
import { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { View } from 'react-native'

export class MainScreen extends Component<NavigationScreenProps<void>> {
  public static navigationOptions = {
    title: 'Home'
  }

  public render() {
    const navigate = this.props.navigation.navigate

    return (
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1
        }}
      >
        <Button
          onPress={() => navigate('Accelerometer')}
          title="Accelerometer"
        />
        <Button
          onPress={() => navigate('Asset')}
          title="Asset"
        />
        <Button
          onPress={() => navigate('Audio')}
          title="Audio"
        />
        <Button
          onPress={() => navigate('Camera')}
          title="Camera"
        />
        <Button
          onPress={() => navigate('Constants')}
          title="Constants"
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
          onPress={() => navigate('Brightness')}
          title="Brightness"
        />
        <Button
          onPress={() => navigate('Font')}
          title="Font"
        />
        <Button
          onPress={() => navigate('MapView')}
          title="MapView"
        />
        <Button
          onPress={() => navigate('Svg')}
          title="Svg"
        />
        <Button
          onPress={() => navigate('VectorIcons')}
          title="Vector Icons"
        />
      </View>
    )
  }
}