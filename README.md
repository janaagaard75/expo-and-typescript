# React Native using Expo and Typescript

<img src="https://github.com/janaagaard75/expo-and-typescript/raw/master/assets/icons/app-icon.png" height="50">

This repository is a [React Native](https://facebook.github.io/react-native/) demo app using the [Expo framework](https://expo.io) and written in [TypeScript](http://www.typescriptlang.org). It used to also contain a type definition file for Expo, but that work has been merged into the [`@types/expo`](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/expo) package.

The app is published on Expo: [Expo and TypeScript on Expo](https://expo.io/@janaagaard75/expo-and-typescript). It is not published to the app stores, but you can run it on a device, if install the free [Expo client](https://expo.io/tools#client).

![Screen shot](https://github.com/janaagaard75/expo-and-typescript/raw/master/screen-shot.png)

## Prerequisites

Install `expo-cli` globally.

```shell
# Install expo-cli globally using Yarn.
yarn global add expo-cli
```

If you prefer to use npm the command is `npm install --global expo-cli`.

## Warnings When Installing Packages

There are a surprising amout of of warnings when building and running the app, because of peer dependecies not being correct. My guess is that the Expo team has a tough time getting all the added React Native libraries to play well together, and this app seems to run fine, so I believe it's safe to ignore the warnings.

## Running the App

Start the local server. This will give you a QR code that you can scan using the Expo Client app on your mobile divice.

```shell
yarn start
```

If you're on a Mac and have Xcode installed, you can run the app using the iOS Simulator with the following command. I am sure you can do something similar with Android.

```shell
yarn ios
```

## Setting up Expo and React Native with TypeScript

**Since version 31 Expo supports TypeScript natively. If you're using that version, 1) don't add the `react-native-typescript-transformer` package, 2) don't specify `sourceExt` and `transformer` in `app.json` and 3) don't mention `babel-preset-expo` and `transform-react-jsx-source` in your `.babelrc`, i.e. delete the file if those were the only two things in it.**

Here is how you set up an Expo app to be able to code in TypeScript instead of JavaScript. Debugging of TypeScript files works, and hot reloading works. I am unsure as to how well hot module replacement works compared to an app coded in JavaScript, but there is definitely some caching going on, because subsequent reloads are faster than the initial load.

### Add TypeScript

Add TypeScript and the helpers library, `tslib`, to the project. I prefer micro managing the version of the packages that I'm using so I add `--exact`, but this is optional. You can, of course, also use `npm` instead of `yarn`.

```shell
yarn add --dev --exact typescript react-native-typescript-transformer
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

### Add React Native TypeScript Transformer

Add the React Native TypeScript Transformer package.

```shell
yarn add --dev --exact react-native-typescript-transformer
```

Configure Expo to use the transformer for `.ts` and `.tsx` files by adding the following lines to `app.json` under `expo/packagerOpts`.

```json
"sourceExts": [
  "ts",
  "tsx"
],
"transformer": "node_modules/react-native-typescript-transformer/index.js"
```

It has been necessary to append `/index.js` to the URL since version 19 of Expo. Don't know why.

[Complete `app.json` in this project](https://github.com/janaagaard75/expo-and-typescript/blob/master/app.json).

### App Component in TypeScript

Create a `src` folder, move `App.js` to that folder, and rename the file to `App.tsx`. Since TypeScript has a syntax that is very similar to JavaScript it is probably not necessary to make any modifications to App.tsx to make it valid TypeScript. It is not required to put the sources files in a `src` folder, but that is the de facto standard.

Create a new `App.js` in the root of the project, and insert the following lines. Expo will still be looking for App.js in the root of the project, and these lines simply loads `src/App.tsx`.

```javascript
import App from './src/App'
export default App
```

### Add Type Definitions

Finally add the type definitions for React, React Native, Expo and the Expo icons.

```shell
yarn add --dev --exact @types/react @types/react-native @types/expo @types/expo__vector-icons
```

## Similar Projects

* [expo-ts-example](https://github.com/dalcib/expo-ts-example), the basis for this project
* [TypeScript-React-Native-Starter](https://github.com/Microsoft/TypeScript-React-Native-Starter)
* [react-native-typescript-starter](https://github.com/cbrevik/react-native-typescript-starter)
