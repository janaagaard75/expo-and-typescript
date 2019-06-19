import * as React from 'react'
import { Component } from 'react'
import { ScrollView } from 'react-native'
import { Text } from 'react-native'
import Constants from 'expo-constants'

export class SystemFontsScreen extends Component {
  public static navigationOptions = {
    title: 'systemFonts'
  }

  public render() {
    return (
      <ScrollView>
        {/* Cast to a string array (Constants.systemFonts as Array<string>)... if using the native types provided by expo insted of @types/expo. See tsconfig.json. */}
        {Constants.systemFonts.map((systemFont, index) => (
          <Text key={index}>{systemFont}</Text>
        ))}
      </ScrollView>
    )
  }
}
