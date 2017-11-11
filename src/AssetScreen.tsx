import * as React from 'react'
import { Component } from 'react'
import { Asset } from 'expo'
import { View } from 'react-native'
import { Image } from 'react-native'

export class AssetScreen extends Component {
  constructor(props: {}, context?: any) {
    super(props, context)

    // This is only required when the app has been published. I haven't tested this code yet. Probably need something listening for this method to finish, that would then trigger a refresh of this component.
    Asset.loadAsync(require('./wtfs-per-minute.png'))
  }

  public static navigationOptions = {
    title: 'Asset'
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
          resizeMode="contain"
          source={require('./wtfs-per-minute.png')}
          style={{
            alignSelf: 'stretch',
            flex: 1,
            height: undefined,
            width: undefined
          }}
        />
      </View>
    )
  }
}