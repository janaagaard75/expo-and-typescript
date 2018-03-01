import * as React from 'react'
import { Button } from 'react-native'
import { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { ScrollView } from 'react-native'

class DestinationAndTitle {
  constructor(
    public destination: string,
    title?: string
  ) {
    if (title === undefined) {
      this.title = destination
    }
    else {
      this.title = title
    }
  }

  public title: string
}

// tslint:disable-next-line:max-classes-per-file
export class MainScreen extends Component<NavigationScreenProps> {
  public static navigationOptions = {
    title: 'Home'
  }

  public render() {
    return (
      <ScrollView
        style={{
          backgroundColor: '#fff',
          flex: 1
        }}
      >
        {this.destinationAndTitlePairs.map(destinationAndTitle =>
          <Button
            key={destinationAndTitle.destination}
            onPress={() => this.props.navigation.navigate(destinationAndTitle.destination)}
            title={destinationAndTitle.title}
          />
        )}
      </ScrollView>
    )
  }

  private destinationAndTitlePairs: Array<DestinationAndTitle> = [
    new DestinationAndTitle('Accelerometer'),
    new DestinationAndTitle('Amplitude'),
    new DestinationAndTitle('Asset'),
    new DestinationAndTitle('Audio'),
    new DestinationAndTitle('Camera'),
    new DestinationAndTitle('Constants'),
    new DestinationAndTitle('LinearGradient'),
    new DestinationAndTitle('BlurView1', 'BlurView 1'),
    new DestinationAndTitle('BlurView2', 'BlurView 2'),
    new DestinationAndTitle('Brightness'),
    new DestinationAndTitle('Facebook'),
    new DestinationAndTitle('Fingerprint'),
    new DestinationAndTitle('Font'),
    new DestinationAndTitle('Gyroscope'),
    new DestinationAndTitle('MapView'),
    new DestinationAndTitle('Svg'),
    new DestinationAndTitle('Util'),
    new DestinationAndTitle('VectorIcons', 'Vector Icons')
  ]
}