import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'

export default class App extends React.Component {
  public render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center'
  }
})