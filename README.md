# React Native using Expo and Typescript

[React Native](https://facebook.github.io/react-native/) app based on [Expo](https://expo.io), written in [TypeScript](http://www.typescriptlang.org). Hot reloading works, but hot module replacement does not.

The type definitions for the Expo SDK still require a lot of work.

This app can be viewed using the Expo client for iOS and Android: <https://expo.io/@janaagaard75/expo-and-typescript>

![Screen shot](https://github.com/janaagaard75/expo-and-typescript/raw/master/screen-shot.png)

## Type Definitions for Expo

These type definitions are based on [pierre-H's type definition file](https://gist.github.com/pierre-H/eef9a9225fb1c5a0f81180a8b0fbb2c2). The ultimate goal is to get the definitions merged into to [expo/expo-sdk](https://github.com/expo/expo-sdk), or if that's is not possible, then as a secondary option to create `@types/expo` package through the [DefinitelyTyped project](https://github.com/DefinitelyTyped/DefinitelyTyped). I do however believe that the quality of the type defintions have to be better before any of these paths are persued.

Here's a lit of the APIs provided by Expo, with a checkmark for the few, that have been tested.

* [x] Accelerometer
* [ ] AdMob
* [ ] Amplitude
* [ ] AppLoading
* [ ] Art
* [ ] Asset
* [ ] Audio
* [ ] AuthSession
* [ ] AV
* [ ] BarCodeScanner
* [x] BlurView
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
* [x] Font
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
* [x] MapView
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

## Setting up Expo and React Native with TypeScript

### TypeScript

Add TypeScript and the helpers library, `tslib`, to the project. It's optional to use the --exact switch. I just prefer micro managing the version of the packages that I'm using. You can, of course, also use `npm` instead of `yarn`.

```shell
yarn add --dev --exact TypeScript react-native-typescript-transformer
yarn add --exact tslib
```

Configure TypeScript by putting a `tsconfig.json` file in the root of your project. You probably don't need all of these settings. **TODO: Boil the configuration down to the required settings.**

```json
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true,
    "forceConsistentCasingInFileNames": true,
    "importHelpers": true,
    "jsx": "react-native",
    "lib": [
      "dom",
      "es2015",
      "es2016",
      "es2017"
    ],
    "module": "es2015",
    "moduleResolution": "node",
    "noEmitHelpers": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "outDir": "build/dist",
    "sourceMap": true,
    "strict": true,
    "target": "es2017"
  },
  "exclude": [
    "build",
    "node_modules"
  ],
  "types": [
    "typePatches"
  ]
}
```

### React Native TypeScript Transformer

Add the React Native TypeScript Transformer package.

```shell
yarn add --dev --exact react-native-typescript-transformer
```

Configure Expo to use the transformer for `ts` and `tsx` files by adding the following lines to `app.json` under `expo/packagerOpts`. [The final app.json should look somewhat like this](https://raw.githubusercontent.com/janaagaard75/expo-and-typescript/master/app.json).

```json
"sourceExts": [
  "ts",
  "tsx"
],
"transformer": "node_modules/react-native-typescript-transformer/index.js"
```

I don't know why it is necessary to append `/index.js` to the URL, but it has been so since version 19 of Expo.

[The final `app.json`](https://github.com/janaagaard75/expo-and-typescript/blob/master/app.json)

### App Component in TypeScript

Create a `src` folder, move `App.js` to that folder, and rename the file to `App.tsx`. Since TypeScript has a syntax that is so similar to JavaScript it's not necessary to make any modifications to App.tsx to make it valid TypeScript.

Create a new `App.js` in the root of the project, and insert the following lines. Expo will still be looking for App.js in the root of the project, so we simply tell it to use the new `src/App.tsx.

```javascript
import App from './src/App'

export default App
```

### Add Type Definitions for React

Add type definitions for React and React Native.

```shell
yarn add --dev --exact @types/react @types/react-native
```

### Add Type Definitions for Expo

Besides what React Native already has, the Expo SDK comes with a lot of additional APIs for your app. Unfortunately there aren't any type definitions for these APIs, and that makes it difficult to use them correctly in TypeScript. I have started on creating these type definitions, but bare in mind that they still lack a lot of testing.

Create a file `expo.d.ts` in the `src` folder and copy the content of this [`expo.d.ts`](https://raw.githubusercontent.com/janaagaard75/expo-sdk-with-type-definitions/master/expo.d.ts) to it.

I'm working on both improving these type definitions, and I'm trying to make it easier to add and update them, but they are currently in a very early stage.

## Similar Projects

* [TypeScript-React-Native-Starter](https://github.com/Microsoft/TypeScript-React-Native-Starter)
* [react-native-typescript-starter](https://github.com/cbrevik/react-native-typescript-starter)
