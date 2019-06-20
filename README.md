# React Native using Expo and Typescript

<img src="https://github.com/janaagaard75/expo-and-typescript/raw/master/assets/app-icon.png" height="50">

This is a [React Native](https://facebook.github.io/react-native/) demo app using the [Expo framework](https://expo.io) and written in [TypeScript](http://www.typescriptlang.org).

This repo used to also contain a type definition file for Expo, but that work has been merged into the [`@types/expo`](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/expo) package. The `expo` npm package now contains its own set of type definitions, so `@types/expo` is now ignore, and has been removed. There is currently a type check issue with the SVGs that I haven't figured out how to solve.

![Screen shot](https://github.com/janaagaard75/expo-and-typescript/raw/master/screen-shot.png)

## Prerequisites

You don't need to install any global packages for this repo. `expo-cli` is included as a dev dependency.

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

## Setting Expo and TypeScript With Expo Version >= 33

Since version 33 Expo includes great types, so there is no longer a need for `@types/expo`. I am really glad that TypeScript support has become official, but also admittedly a bit sad, that all the work in `@types/expo` will no longer be used.

## Setting Expo and TypeScript With Expo Version >= 31

Since version 31 Expo includes [Babel 7](https://babeljs.io), and Babel is used out of the box to transform the TypeScript into JavaScript. Note that Babel doesn't ["perform type-checking on TypeScript code; it [only transforms] your code, and it will compile regardless of whether type errors are present."](https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/), so if you want to type check your code, you have to run the TypeScript compiler separately. The npm/Yarn command script `check-types` in this repo does this. `tsconfig.json` is only used when checking the types. Babel is configured with `babel.config.js`.

The Expo team is currently working on native type definitions, but this works is not yet done. Look for the `types` property in `node_modules/expo/package.json`. If this property exists then TypeScript will use there instead of `@types/expo`. You can add the lines below to your `tsconfig.json` if you want to use `@types/expo` instead of the official type definitions. I would recommend trying to the use the built-in type definition once they are released, and only install `@types/expo` if they aren't good enough for your project.

```javascript
"paths": {
  "expo": ["../node_modules/@types/expo", "../node_modules/expo"]
}
```

## Setting Expo and TypeScript With Expo Version <= 30

This guide show how to transform and Expo app written in JavaScript in to TypeScript. While Expo supports TypeScript since version 31, it is still a work in progress, and namely the type definition files are not yet included.

Setting breakpoints in TypeScript files works, and hot reloading works, so it's a pretty solid development experience as long as you're lucky enough to not hit a missing type definition.

### Add TypeScript

Add TypeScript and the helper library, `tslib`, to the project. I prefer micro managing the version of the packages that I'm using so I add `--exact`, but this is optional. You can, of course, also use `npm` instead of `yarn`.

```shell
yarn add --dev --exact typescript react-native-typescript-transformer
yarn add --exact tslib
```

Configure TypeScript by adding a [`tsconfig.json`](https://github.com/janaagaard75/expo-and-typescript/blob/master/tsconfig.json) file in the root of your project. If you are stating a new project, I would definitely recommend including `"strict": true` and some of the other compiler checks. If you are converting a JavaScript project to TypeScript, you might want to loosen up the rules to start with, and apply them gradually.

### Main App Component in TypeScript

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

Since Expo is evolving quickly it is not uncommon that the type definitions are outdated or simply missing. [AudioScreen.tsx line 59](https://github.com/janaagaard75/expo-and-typescript/blob/master/src/AudioScreen.tsx#L59) shows how to deal with an incorrect type definition and [MapViewScreen.tsx line 5] show how to deal with missing type definitions.

## Why No Semicolons?

The repository started out as mainly a big collection of TypeScript interfaces. While most developers are pretty strict about terminating lines with or without a semicolon, this is apparently not the case when it comes to writing interfaces. So after reading about the [JavaScript Standard Style](https://standardjs.com/) advocating not using semicolons, I thought this would be a simple way to clean up the mess. And now that I've become used to looking a TypeScript code without semicolons it really like it. It's definitely cleaner, and I have yet to stumble upon a piece of code that would be more readable with the semicolons.

```typescript
// Some use semicolons in interfaces.
interface Point {
  x: number
  y: number
}

// Some use commas.
interface Point {
  x: number
  y: number
}

// And sometimes it's a mix.
interface Point {
  x: number
  y: number
  color: {
    border: string
    fill: string
  }
}
```

## Similar Projects

- [expo-ts-example](https://github.com/dalcib/expo-ts-example), the basis for this project
- [TypeScript-React-Native-Starter](https://github.com/Microsoft/TypeScript-React-Native-Starter)
- [react-native-typescript-starter](https://github.com/cbrevik/react-native-typescript-starter)
