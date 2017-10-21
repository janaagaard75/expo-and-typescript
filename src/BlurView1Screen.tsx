import * as React from 'react'
import { BlurView } from 'expo'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'

const expoImageUrl = 'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png'

export class BlurView1Screen extends React.Component {
  public render() {
    return (
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        {/* This image is blurred because BlurView is positioned on top of it. */}
        <Image
          source={{ uri: expoImageUrl }}
          style={{
            height: 192,
            width: 192,
          }}
        />
        <BlurView
          intensity={50}
          style={StyleSheet.absoluteFill}
          tint="light"
        >
          <Image
            source={{ uri: expoImageUrl }}
            style={{
              height: 96,
              width: 96,
            }}
          />
        </BlurView>
        <Image
          source={{ uri: expoImageUrl }}
          style={{
            height: 48,
            width: 48,
          }}
        />
      </View>
    )
  }
}