# React Native using Expo and Typescript

This repository is a [React Native](https://facebook.github.io/react-native/) demo app using [Expo](https://expo.io) and written in [TypeScript](http://www.typescriptlang.org). It used to also contain a type definition file for Expo, but that work has been merged into the [`@types/expo`](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/expo) package.

The app is published on Expo: [Expo and TypeScript on Expo](https://expo.io/@janaagaard75/expo-and-typescript). It is not published to the app stores, but you can run it on a device, if install the free [Expo client](https://expo.io/tools#client).

![Screen shot](https://github.com/janaagaard75/expo-and-typescript/raw/master/screen-shot.png)

The code is orignally based on [expo-ts-example](https://github.com/dalcib/expo-ts-example).

## Currently Lots of Warnings

The current state of the app is a bit shaky in that there are quite a lot of warnings when building and running the app.

1. A buch of warnings about incompatible platform when installing the packages, e.g. *@expo/ngrok-bin-freebsd-ia32@2.2.8: The platform "darwin" is incompatible with this module.* Using npm instead of yarn reveals that these are optional dependencies being skipped, but still weird to have all these warnings.

2. Two issues when running the app in Expo, one about npm not found and then this second one *`npm` command not found. If you have npm installed please run `npm install -g exp && exp path`*. Both messages can be removed by install exp globally running the suggested command, though. Install globally with Yarn does not seem to work.

3. Warning inside the app that `StackNavigator` has been deprecated. The warning includes a fix, but I haven't updated the code yet.

## Running the App

You can either run the app using [Expo XDE](https://expo.io/tools#xde) or using the command line. Personally I find that using the XDE is the easiest solution, since it handles a lot of the setup for you, but if you're prefer using the command line here are the commands to do so.

Start the local server. This will give you a QR code that you can scan using the Expo Client app on your mobile divice.

```shell
yarn start
```

If you're on a Mac and have Xcode installed, you can run the app using the iOS Simulator. The first time you have to install the Expo Client on the simulator. Use the same command to update the client.

```shell
yarn exp install:ios
```

Once the client is installed you can launch the simulator and open the project with this command. The server has to be kept running, so open up a second terminal.

```shell
yarn ios
```

## Setting up Expo and React Native with TypeScript

Here is how you set up an Expo app to be able to code in TypeScript instead of JavaScript. Debugging of TypeScript files works, and hot realoading works. I am unsure as to how well hot module replacement works compared to coding in Expo in JavaScript. There is definitely some caching though, because subsequent reloads are faster than the initial load.

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

### Add Type Definitions

Add type definitions for React, React Native and Expo.

```shell
yarn add --dev --exact @types/react @types/react-native @types/expo
```

## Similar Projects

* [expo-ts-example](https://github.com/dalcib/expo-ts-example)
* [TypeScript-React-Native-Starter](https://github.com/Microsoft/TypeScript-React-Native-Starter)
* [react-native-typescript-starter](https://github.com/cbrevik/react-native-typescript-starter)
