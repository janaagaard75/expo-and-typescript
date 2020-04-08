import { BlurView } from "expo-blur";
import React, { Component } from "react";
import { Animated, Image, StyleSheet, View } from "react-native";

const expoLogoUrl =
  "https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AnimatedBlurView = Animated.createAnimatedComponent(BlurView) as any;

interface State {
  intensity: Animated.Value;
}

export class AnimatedBlurViewScreen extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      intensity: new Animated.Value(0),
    };
  }

  public static navigationOptions = {
    title: "BlurView 2",
  };

  public componentDidMount() {
    this.animate();
  }

  private animate = () => {
    Animated.timing(this.state.intensity, {
      duration: 2500,
      toValue: 100,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(this.state.intensity, {
        duration: 2500,
        toValue: 0,
        useNativeDriver: true,
      }).start(this.animate);
    });
  };

  public render() {
    return (
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#fff",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <BlurView intensity={this.state.intensity} />
        <Image
          source={{ uri: expoLogoUrl }}
          style={{
            height: 180,
            width: 180,
          }}
        />
        <AnimatedBlurView
          intensity={this.state.intensity}
          style={StyleSheet.absoluteFill}
          tint="default"
        />
      </View>
    );
  }
}
