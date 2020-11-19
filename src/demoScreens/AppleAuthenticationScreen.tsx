import * as AppleAuthentication from "expo-apple-authentication";
import { AppleAuthenticationCredential } from "expo-apple-authentication";
import React, { FunctionComponent, useState } from "react";
import { ScrollView, Text, View } from "react-native";

export const AppleAuthenticationScreen: FunctionComponent = () => {
  const [identity, setIdentity] = useState<
    AppleAuthenticationCredential | undefined
  >(undefined);

  const signIn = async () => {
    try {
      setIdentity(
        await AppleAuthentication.signInAsync({
          requestedScopes: [
            AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
            AppleAuthentication.AppleAuthenticationScope.EMAIL,
          ],
        })
      );
    } catch (error) {
      if (error.code === "ERR_CANCELED") {
        console.info("The user cancelled in the sign in.", error);
      } else {
        console.info("An error occurred signing in.", error);
      }
    }
  };

  return (
    <ScrollView>
      <View
        style={{
          alignItems: "center",
          flex: 1,
        }}
      >
        <AppleAuthentication.AppleAuthenticationButton
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
          cornerRadius={5}
          onPress={signIn}
          style={{ height: 44, marginTop: 100, width: 200 }}
        />

        <Text style={{ marginTop: 50, width: "80%" }}>
          {identity === undefined
            ? "Not signed in."
            : JSON.stringify(identity, undefined, 2)}
        </Text>
      </View>
    </ScrollView>
  );
};
