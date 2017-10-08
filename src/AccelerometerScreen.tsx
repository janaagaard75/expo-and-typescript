import * as React from 'react'
import { Accelerometer } from 'expo'
import { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { EventSubscription } from 'fbemitter'

interface State {
  accelerometerData: Accelerometer.AccelerometerObject
}

export class AccelerometerScreen extends Component<NavigationScreenProps<void>, State> {
  constructor(props: NavigationScreenProps<void>, context?: any) {
    super(props, context)

    this.state = {
      accelerometerData: {
        x: 0,
        y: 0,
        z: 0,
      },
    }
  }

  private _subscription: EventSubscription | undefined

  public componentDidMount() {
    this._toggle()
  }

  public componentWillUnmount() {
    this._unsubscribe()
  }

  private _toggle = () => {
    if (this._subscription) {
      this._unsubscribe()
    }
    else {
      this._subscribe()
    }
  }

  private _slow = () => {
    Accelerometer.setUpdateInterval(1000)
  }

  private _fast = () => {
    Accelerometer.setUpdateInterval(16)
  }

  private _subscribe = () => {
    this._subscription = Accelerometer.addListener(accelerometerData => {
      this.setState({ accelerometerData })
    })
  }

  private _unsubscribe = () => {
    if (this._subscription !== undefined) {
      this._subscription.remove()
    }
    this._subscription = undefined
  }

  public render() {
    const { x, y, z } = this.state.accelerometerData

    return (
      <View style={styles.sensor}>
        <Text>Accelerometer:</Text>
        <Text>x: {roundToTwoDecimals(x)} y: {roundToTwoDecimals(y)} z: {roundToTwoDecimals(z)}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this._toggle} style={styles.button}>
            <Text>Toggle</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._slow} style={[styles.button, styles.middleButton]}>
            <Text>Slow</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._fast} style={styles.button}>
            <Text>Fast</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

function roundToTwoDecimals(value: number | undefined) {
  if (value === undefined) {
    return 0
  }

  return Math.floor(value * 100) / 100
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#eee',
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  buttonContainer: {
    alignItems: 'stretch',
    flexDirection: 'row',
    marginTop: 15,
  },
  container: {
    flex: 1,
  },
  middleButton: {
    borderColor: '#ccc',
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  sensor: {
    marginTop: 15,
    paddingHorizontal: 10,
  },
})