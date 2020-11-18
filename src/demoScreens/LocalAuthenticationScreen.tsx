import * as LocalAuthentication from "expo-local-authentication";
import React, { Component } from "react";
import { Button, Text, View } from "react-native";

interface Props {}

interface State {
  authenticated: boolean;
  authenticationError: string;
  hasHardware: boolean | undefined;
}

export class LocalAuthenticationScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      authenticated: false,
      authenticationError: "n/a",
      hasHardware: undefined,
    };

    this.updateState();
  }

  public render() {
    return (
      <View>
        <Text>
          This device has a fingerprint or a face scanner:{" "}
          {this.state.hasHardware ? "Yes" : "No"}
        </Text>
        <Text>Authenticated: {this.state.authenticated ? "Yes" : "No"}</Text>
        <Text>Authentication error: {this.state.authenticationError}</Text>
        <Button onPress={() => this.authenticate()} title="Scan" />
      </View>
    );
  }

  private async authenticate() {
    const authenticated = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authentication message",
    });

    if (authenticated.success) {
      this.setState({
        authenticationError: "None",
      });
    } else {
      this.setState({
        authenticationError: authenticated.error,
      });
    }

    this.setState({
      authenticated: authenticated.success,
    });
  }

  private async updateState() {
    this.setState({
      hasHardware: await LocalAuthentication.hasHardwareAsync(),
    });
  }
}
