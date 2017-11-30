# Contibuting to Expo and TypeScript

* Pick one of the SDKs that haven't yet been tested from the list in the README.
* Write the type definitions for the SDK.
* Add a small test-screen for the SDK. This is mainly to make sure that the namespace is correct, so it's only necessary to test the bare minimum.
* Create a pull request with the changes.

## Writing Type Definitions

Look at the [documentation](https://docs.expo.io/versions/latest/index.html) and the [source code](https://github.com/expo/expo-sdk/tree/master/src) of see how the SDK should be called.

Some of the SDKs have [Flow](https://flow.org/) definitions, making it easy to get the type definitions correct. [Permissions.js](https://github.com/expo/expo-sdk/blob/master/src/Permissions.js) is an example of an SDK that has Flow definitions.

## Code Format

Write the code so that it matches the existing style and respects the TSLint rules.
