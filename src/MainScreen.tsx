import React from 'react'
import { Button, ScrollView } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'

class DestinationAndTitle {
    public title: string

    constructor(
        public destination: string,
        title?: string,
    ) {
        (title === undefined)
            ? this.title = destination
            : this.title = title
    }
}

export class MainScreen extends React.Component<NavigationScreenProps> {
    public static navigationOptions = {
        title: 'Expo Options',
    }
    private destinationAndTitlePairs: DestinationAndTitle[] = [
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
        new DestinationAndTitle('VectorIcons', 'Vector Icons'),
    ]

    public render() {
        return (
            <ScrollView
                style={{
                    backgroundColor: '#fff',
                    flex: 1,
                }}
            >
                {this.destinationAndTitlePairs.map(destinationAndTitle =>
                    <Button
                        key={destinationAndTitle.destination}
                        onPress={() => this.props.navigation.navigate(destinationAndTitle.destination)}
                        title={destinationAndTitle.title}
                    />,
                )}
            </ScrollView>
        )
    }
}