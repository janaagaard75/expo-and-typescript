# React Native using Expo and Typescript

<img src="../../raw/master/assets/app-icon.png" height="50">

This is a [React Native](https://facebook.github.io/react-native/) demo app using the [Expo framework](https://expo.io) and written in [TypeScript](http://www.typescriptlang.org). It uses the [managed workflow](https://docs.expo.io/introduction/managed-vs-bare/).

This repo used to also contain a type definition file for Expo. That work was merged into the [`@types/expo`](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/expo) package. `@types/expo` is now deprecated in favor of definition types includes with the `expo` package. TypeScript FTW!

![Screen shot](../../raw/master/screen-shot.png)

## Prerequisites

- [Node.js](https://nodejs.org/).
- [Yarn](https://yarnpkg.com/).
- Optional: [XCode](https://developer.apple.com/xcode/), since it includes the iOS Simulator. XCode only runs on Macs.
- Optional: [Android Studio](https://developer.android.com/studio), since it includes the Android Virtual Device Manager.

You don't need to install any global npm packages for this repo. `expo-cli` is included as a dev dependency.

## Warnings When Installing Packages

There are a surprising amount of of warnings when installing Node packages, because of peer dependencies not being correct. My guess is that the Expo team has a tough time getting all the added React Native libraries to play well together. This app seems to run fine, so I believe it's safe to ignore the warnings.

## Running the App

Start the local server. This will give you a QR code that you can scan using the Expo Client app on your mobile device.

```shell
yarn start
```

If you're on a Mac and have Xcode installed, you can run the app using the iOS Simulator with the following command. I am sure you can do something similar with Android.

```shell
yarn ios
```

## Packages

List of the packages that this project uses. I really wish it was possible to write comments in `package.json`.

When upgrading Expo, `expo-cli` will also upgrade the versions of all the package that it knows about. This list naturally includes all the `expo-` packages, but also a few more. Do not change the version numbers of the known packages. Unknown packages may be upgraded. More info in my blog post [Upgrade an Expo App](https://janaagaard.com/blog/2020-05-04-upgrading-an-expo-app).

| Package Name                        | Known? | Notes                                            |
| ----------------------------------- | ------ | ------------------------------------------------ |
| @react-native-community/masked-view | Known  | TODO: Where is this used?                        |
| @react-navigation/native            |        | Used to navigate between screens.                |
| @react-navigation/stack             |        | Used to navigate between screens.                |
| expo                                | Known  |                                                  |
| expo-analytics-amplitude            | Known  | Used by AmplitudeScreen.                         |
| expo-apple-authentication           | Known  | Used by AppleAuthenticationScreen.               |
| expo-asset                          | Known  | Used by AssetsScreen.                            |
| expo-av                             | Known  | Used by AudioScreen.                             |
| expo-barcode-scanner                | Known  | Used by BarCodeScannerScreen.                    |
| expo-blur                           | Known  | Used by BlurScreen.                              |
| expo-camera                         | Known  | Used by CameraScreen.                            |
| expo-constants                      | Known  | Used by the constants screens.                   |
| expo-facebook                       | Known  | Used by FacebookScreen.                          |
| expo-font                           | Known  | Used by FontScreen.                              |
| expo-linear-gradient                | Known  | Used by LinearGradientScreen.                    |
| expo-local-authentication           | Known  | Used by LocalAuthenticationScreen.               |
| expo-sensors                        | Known  | TODO: Where is this used?                        |
| react                               | Known  |                                                  |
| react-native                        | Known  |                                                  |
| react-native-gesture-handler        | Known  | TODO: Where is this used?                        |
| react-native-maps                   | Known  | Used by MapsViewScreen.                          |
| react-native-reanimated             | Known  | TODO: Where is this used?                        |
| react-native-safe-area-context      | Known  | TODO: Where is this used?                        |
| react-native-screens                | Known  | TODO: Where is this used?                        |
| react-native-svg                    | Known  | Used by SvgScreen.                               |
| @babel/core                         | Known  | Peer dependency.                                 |
| @types/react                        | Known  |                                                  |
| @types/react-native                 | Known  |                                                  |
| @typescript-eslint/eslint-plugin    |        | Add TypeScript support to ESLint.                |
| @typescript-eslint/parser           |        | Add TypeScript support to ESLint.                |
| babel-preset-expo                   | Known  | Configure Babel for Expo.                        |
| eslint                              |        |                                                  |
| eslint-config-prettier              |        | Prettier rules for ESLint.                       |
| eslint-plugin-prettier              |        | Run prettier through ESLint. TODO: Is this used? |
| eslint-plugin-react                 |        | React rules for ESLint.                          |
| expo-cli                            |        | Ensure everybody has the same version.           |
| prettier                            |        | Format files.                                    |
| typescript                          | Known  |                                                  |

## Troubleshooting

If you have issues running the app it may help clearing the React Native packager cache. Use the command `yarn expo start --clear` to do this.

More tips found in [this thread on the Expo Forum](https://forums.expo.io/t/how-to-clear-the-react-native-packager/1352).

## Automated Tests

This project hasn't been set up with automated tests. The blog post [setting up tests for React-Native-Expo-Typescript] can probably help.

## Similar Projects

- [expo-ts-example](https://github.com/dalcib/expo-ts-example), the basis for this project
- [TypeScript-React-Native-Starter](https://github.com/Microsoft/TypeScript-React-Native-Starter)
- [react-native-typescript-starter](https://github.com/cbrevik/react-native-typescript-starter)
