import * as React from 'react'
import { Text } from 'react-native'
import { Component } from 'react'
import { Constants } from 'expo'
import { ScrollView } from 'react-native'

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
