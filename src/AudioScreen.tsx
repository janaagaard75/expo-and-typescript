import * as React from 'react'
import { Component } from 'react'
import { Linking } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'
import { Audio } from 'expo'

interface State {
  soundLoaded: boolean
}

export class AudioScreen extends Component<{}, State> {
  constructor(props: {}, context?: any) {
    super(props, context)

    this.state = {
      soundLoaded: false
    }

    this.playSound()
  }

  public static navigationOptions = {
    title: 'Audio'
  }

  public render() {
    if (!this.state.soundLoaded) {
      return (
        <Text>Loading sound...</Text>
      )
    }

    return (
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center'
        }}
      >
        <Text>
          Music from
          {' '}
          <Text
            style={{ color: 'blue' }}
            onPress={() => Linking.openURL('https://www.bensound.com/royalty-free-music/track/the-jazz-piano')}
          >
            www.bensound.com
          </Text>
          .
        </Text>
      </View>
    )
  }

  private async playSound() {
    await Audio.Sound.create(
      require('../assets/sounds/bensound-thejazzpiano.mp3'),
      { shouldPlay: true }
    )

    this.setState({
      soundLoaded: true
    })
  }
}