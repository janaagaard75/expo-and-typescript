import * as React from 'react'
import { Button } from 'react-native'
import { Component } from 'react'
import { Fingerprint } from 'expo'
import { Text } from 'react-native'
import { View } from 'react-native'

interface State {
  authenticated: boolean
  authenticationError: string
  hasHardware: boolean | undefined
}

export class FingerprintScreen extends Component<{}, State> {
  constructor(props: {}, context?: any) {
    super(props, context)

    this.state = {
      authenticated: false,
      authenticationError: 'n/a',
      hasHardware: undefined
    }

    this.updateState()
  }

  public render() {
    return (
      <View>
        <Text>This device has a fingerprint or a face scanner: {this.state.hasHardware ? 'Yes' : 'No'}</Text>
        <Text>Authenticated: {this.state.authenticated ? 'Yes' : 'No'}</Text>
        <Text>Authentication error: {this.state.authenticationError}</Text>
        <Button
          onPress={() => this.authenticate()}
          title="Scan"
        />
      </View>
    )
  }

  private async authenticate() {
    const authenticated = await Fingerprint.authenticateAsync('Authentication message')

    if (authenticated.success) {
      this.setState({
        authenticationError: 'None'
      })
    }
    else {
      this.setState({
        authenticationError: authenticated.error
      })
    }

    this.setState({
      authenticated: authenticated.success
    })
  }

  private async updateState() {
    this.setState({
      hasHardware: await Fingerprint.hasHardwareAsync()
    })
  }
}