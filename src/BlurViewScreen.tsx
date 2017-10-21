import * as React from 'react'
import { BlurView } from 'expo'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'

const expoImageUrl = 'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png'

export class BlurViewScreen extends React.Component {
  public render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          style={{
            height: 192,
            width: 192,
          }}
          source={{ uri: expoImageUrl }}
        />
        <BlurView
          intensity={50}
          style={StyleSheet.absoluteFill}
          tint="light"
        >
          <Image
            style={{
              height: 96,
              width: 96,
            }}
            source={{ uri: expoImageUrl }}
          />
        </BlurView>
      </View>
    )
  }
}