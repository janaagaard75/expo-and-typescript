import { FontAwesome } from "@expo/vector-icons";
import { Facebook } from "expo";
import React, { Component } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";

export class FacebookScreen extends Component<NavigationStackScreenProps> {
  public static navigationOptions = {
    title: "Facebook"
  };

  public async logIn() {
    const loginResponse = await Facebook.logInWithReadPermissionsAsync(
      "1487822177919606",
      {
        permissions: ["public_profile"]
      }
    );

    if (loginResponse.type === "success") {
      // Get the user's name using Facebook's Graph API.
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${loginResponse.token}`
      );
      Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
    }
  }

  public render() {
    return (
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#fff",
          flex: 1,
          justifyContent: "center"
        }}
      >
        <TouchableOpacity onPress={this.logIn}>
          <View
            style={{
              alignItems: "center",
              backgroundColor: "#4267b2",
              borderRadius: 5,
              flexDirection: "row",
              height: 40,
              paddingLeft: 6,
              width: 250
            }}
          >
            <FontAwesome
              name="facebook-official"
              size={28}
              style={{ color: "#fff" }}
            />
            <Text
              style={{
                color: "#fff",
                flexGrow: 1,
                fontSize: 20,
                fontWeight: "500",
                textAlign: "center"
              }}
            >
              Log in With Facebook
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
