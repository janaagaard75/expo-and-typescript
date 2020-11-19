import * as AppleAuthentication from "expo-apple-authentication";
import React, { FunctionComponent } from "react";
import { View } from "react-native";

export const AppleAuthenticationScreen: FunctionComponent = () => (
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
      onPress={async () => {
        try {
          await AppleAuthentication.signInAsync({
            requestedScopes: [
              AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
              AppleAuthentication.AppleAuthenticationScope.EMAIL,
            ],
          });
          // signed in
        } catch (e) {
          if (e.code === "ERR_CANCELED") {
            // handle that the user canceled the sign-in flow
          } else {
            // handle other errors
          }
        }
      }}
      style={{ height: 44, marginTop: 100, width: 200 }}
    />
  </View>
);
