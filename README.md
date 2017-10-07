# React Native using Expo and Typescript

[React Native](https://facebook.github.io/react-native/) app based on [Expo](https://expo.io), written in [TypeScript](http://www.typescriptlang.org). Hot reloading works, but hot module replacement does not. [The steps required to set up a React Native app to using TypeScript](https://github.com/janaagaard75/expo-and-typescript/wiki).

The type definitions for Expo still require a lot of work.

This app can be viewed using the Expo client for iOS and Android: <https://expo.io/@janaagaard75/expo-and-typescript>

<p align="center">
  <img src="https://github.com/janaagaard75/expo-and-typescript/raw/master/screenshot.png" alt="Screenshot of expo-and-typescript">
</p>

## Type Definitions for Expo

These type definitions are based on [pierre-H's type definition file](https://gist.github.com/pierre-H/eef9a9225fb1c5a0f81180a8b0fbb2c2). The ultimate goal is to get the definitions merged into to [expo/expo-sdk](https://github.com/expo/expo-sdk), or if that's is not possible, then as a secondary option to create `@types/expo` package through the [DefinitelyTyped project](https://github.com/DefinitelyTyped/DefinitelyTyped). I do however believe that the quality of the type defintions have to be better before any of these paths are persued.

Here's a lit of the APIs provided by Expo, with a checkmark for the few, that have been tested.

* [ ] Accelerometer
* [ ] AdMob
* [ ] Amplitude
* [ ] AppLoading
* [ ] Art
* [ ] Asset
* [ ] Audio
* [ ] AuthSession
* [ ] AV
* [ ] BarCodeScanner
* [ ] BlurView
* [ ] Branch
* [ ] Brightness
* [ ] Camera
* [ ] Constants
* [ ] Contacts
* [ ] DocumentPicker
* [ ] ErrorRecovery
* [ ] Facebook
* [ ] FacebookAds
* [ ] FileSystem
* [ ] Fingerprint
* [ ] Font
* [ ] GestureHandler
* [ ] GLView
* [ ] Google
* [ ] Gyroscope
* [ ] ImagePicker
* [ ] IntentLauncherAndroid
* [ ] KeepAwake
* [x] LinearGradient
* [ ] Location
* [ ] Lottie
* [ ] Magnetometer
* [ ] MapView
* [ ] Notifications
* [ ] Payments
* [ ] Pedometer
* [ ] Permissions
* [ ] registerRootComponent
* [x] ScreenOrientation
* [ ] SecureStore
* [ ] Segment
* [ ] Speech
* [ ] SQLite
* [x] Svg
* [ ] takeSnapshotAsync
* [ ] Util
* [ ] Video
* [ ] WebBrowse

## Similar Projects

* [TypeScript-React-Native-Starter](https://github.com/Microsoft/TypeScript-React-Native-Starter)
* [react-native-typescript-starter](https://github.com/cbrevik/react-native-typescript-starter)
