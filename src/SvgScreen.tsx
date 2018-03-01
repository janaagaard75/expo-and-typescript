import * as React from 'react'
import { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { Svg } from 'expo'
import { View } from 'react-native'

export class SvgScreen extends Component<NavigationScreenProps> {
  public static navigationOptions = {
    title: 'Svg'
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
        <Svg
          height={100}
          style={{
            marginTop: 10
          }}
          viewBox="0 0 60 60"
          width={100}
        >
          <Svg.G>
            <Svg.Path
              d="M30.001,60 C31.537,58.4 31.537,58.4 38.321,51.232 C44.593,44.64 48.689,39.328 51.889,33.632 C54.641,28.768 55.793,24.736 55.793,19.936 C55.793,13.792 53.745,9.12 49.841,6.432 C47.601,4.896 44.913,4 42.225,4 C39.921,4 37.233,4.64 35.697,5.472 C33.329,6.816 31.473,9.696 30.897,12.832 C30.577,14.752 30.385,15.136 30.001,15.136 C29.617,15.136 29.553,14.944 29.105,12.832 C28.593,9.952 26.929,7.264 24.753,5.728 C23.089,4.576 21.041,4 18.289,4 C13.489,4 9.969,5.728 7.409,9.312 C5.425,12.128 4.209,16.096 4.209,19.808 C4.209,26.08 7.345,33.504 13.617,41.76 C17.841,47.392 18.993,48.672 30.001,60 z"
              fill={'#f00'}
            />
          </Svg.G>
        </Svg>
      </View>
    )
  }
}