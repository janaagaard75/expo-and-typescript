import * as React from 'react'
import { BlurView } from 'expo'
import { Image } from 'react-native'
import { StatusBar } from 'react-native'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'

const uri = 'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png'

export class BlurViewScreen extends React.Component {
  public render() {
    return (
      <View style={{ flex: 1 }}>
        <Image style={{ width: 192, height: 192 }} source={{ uri }} />

        <BlurView tint="light" intensity={50} style={StyleSheet.absoluteFill}>
          <Image style={{ width: 96, height: 96 }} source={{ uri }} />
        </BlurView>

        <StatusBar hidden={true} />
      </View>
    )
  }
}