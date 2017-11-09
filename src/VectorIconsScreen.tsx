import * as React from 'react'
import { Component } from 'react'
// tslint:disable-next-line:no-implicit-dependencies
import { Ionicons } from '@expo/vector-icons'
import { View } from 'react-native'

export class VectorIconsScreen extends Component {
  public static navigationOptions = {
    title: 'Vector Icons'
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
        <Ionicons
          color="green"
          name="md-checkmark-circle"
          size={100}
          style={{
            textDecorationColor: 'black',
            textDecorationLine: 'underline',
            textDecorationStyle: 'double'
          }}
        />
      </View>
    )
  }
}