import * as AppleAuthentication from "expo-apple-authentication";
import React, { FunctionComponent } from "react";

export const AppleAuthenticationScreen: FunctionComponent = () => (
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
    style={{ width: 200, height: 44 }}
  />
);
