import * as React from 'react'
import { Animated } from 'react-native'
import { BlurView } from 'expo'
import { Component } from 'react'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'

const expoLogoUrl = 'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png'
const AnimatedBlurView = Animated.createAnimatedComponent(BlurView)

interface State {
  intensity: Animated.Value
}

export class BlurView2Screen extends Component<{}, State> {
  constructor(props: {}, context?: any) {
    super(props, context)

    this.state = {
      intensity: new Animated.Value(0)
    }
  }

  public static navigationOptions = {
    title: 'BlurView 2'
  }

  public componentDidMount() {
    this.animate()
  }

  private animate = () => {
    Animated.timing(this.state.intensity, { duration: 2500, toValue: 100 }).start(() => {
      Animated.timing(this.state.intensity, { duration: 2500, toValue: 0 }).start(this.animate)
    })
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
        <Image
          source={{ uri: expoLogoUrl }}
          style={{
            height: 180,
            width: 180
          }}
        />
        <AnimatedBlurView
          intensity={this.state.intensity}
          style={StyleSheet.absoluteFill}
          tint="default"
        />
      </View>
    )
  }
}