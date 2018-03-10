import * as React from 'react'
import { Component } from 'react'
import { Asset } from 'expo'
import { Image, Text, View } from 'react-native'

interface State {
    assetsLoaded: boolean
}

export class AssetScreen extends Component<{}, State> {
    public static navigationOptions = {
        title: 'Asset',
    }

    constructor(props: {}, context?: any) {
        super(props, context)

        this.state = {
            assetsLoaded: false,
        }

        this.loadAssets()
    }

    public render() {
        if (!this.state.assetsLoaded) {
            return (
                <Text>Loading assets...</Text>
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
                <Image
                    resizeMode="contain"
                    source={require('assets/img/wtfs-per-minute.png')}
                    style={{
                        alignSelf: 'stretch',
                        flex: 1,
                        height: undefined,
                        width: undefined,
                    }}
                />
            </View>
        )
    }

    private async loadAssets() {
        // This is only required when the app has been published. I haven't tested this code yet, so not really sure if this statement is correct.
        await Asset.loadAsync(require('assets/img/wtfs-per-minute.png'))
        this.setState({
            assetsLoaded: true,
        })
    }
}