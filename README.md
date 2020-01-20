# React Native using Expo and Typescript

<img src="https://github.com/janaagaard75/expo-and-typescript/raw/master/assets/app-icon.png" height="50">

This is a [React Native](https://facebook.github.io/react-native/) demo app using the [Expo framework](https://expo.io) and written in [TypeScript](http://www.typescriptlang.org).

This repo used to also contain a type definition file for Expo. That work was merged into the [`@types/expo`](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/expo) package. `@types/expo` is now deprecated in favor of definition types includes with the `expo` package. TypeScript FTW!

![Screen shot](https://github.com/janaagaard75/expo-and-typescript/raw/master/screen-shot.png)

## Prerequisites

- [Node.js](https://nodejs.org/).
- [Yarn](https://yarnpkg.com/).
- Optional: [XCode](https://developer.apple.com/xcode/), since it includes the iOS Simulator. XCode only runs on Macs.
- Optional: [android studio](https://developer.android.com/studio), since it includes the Android Virtual Device Manager.

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

## Troubleshooting

If you have issues running the app it may help clearing the React Native packager cache. Use the command `yarn expo start --clear` to do this.

More tips found in [this thread on the Expo Forum](https://forums.expo.io/t/how-to-clear-the-react-native-packager/1352).

## Similar Projects

- [expo-ts-example](https://github.com/dalcib/expo-ts-example), the basis for this project
- [TypeScript-React-Native-Starter](https://github.com/Microsoft/TypeScript-React-Native-Starter)
- [react-native-typescript-starter](https://github.com/cbrevik/react-native-typescript-starter)
