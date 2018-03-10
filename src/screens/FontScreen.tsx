import * as React from 'react'
import { Component } from 'react'
import { Font } from 'expo'
import { Text, View } from 'react-native'

interface State {
    fontLoaded: boolean
}

export class FontScreen extends Component<{}, State> {
    public static navigationOptions = {
        title: 'Font',
    }

    constructor(props: {}, context?: any) {
        super(props, context)

        this.state = {
            fontLoaded: false,
        }

        this.loadFont()
    }

    public render() {
        if (!this.state.fontLoaded) {
            return (
                <Text>Loading font...</Text>
            )
        }

        return (
            <View
                style={{
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    flex: 1,
                    justifyContent: 'center',
                }}
            >
                <Text
                    style={{
                        fontFamily: 'PokerKings-regular',
                        fontSize: 48,
                        textAlign: 'center',
                    }}
                >
                    PokerKings regular
                </Text>
            </View>
        )
    }

    private async loadFont() {
        await Font.loadAsync({
            'PokerKings-regular': require('assets/fonts/PokerKings-Regular.ttf'),
        })

        this.setState({
            fontLoaded: true,
        })
    }
}
