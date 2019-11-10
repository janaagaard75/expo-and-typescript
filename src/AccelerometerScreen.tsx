import { Subscription } from "@unimodules/core";
import { Accelerometer } from "expo-sensors";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ThreeAxisMeasurement } from "./ThreeAxisMeasurement";

const initialState: ThreeAxisMeasurement = {
  x: 0,
  y: 0,
  z: 0
};

function roundToTwoDecimals(value = 0) {
  // return Math.floor(value * 100) / 100;
  return +value.toFixed(2);
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    marginTop: 15,
    paddingHorizontal: 10
  },
  subContainer: {
    alignItems: "stretch",
    flexDirection: "row",
    marginTop: 15
  },
  button: {
    alignItems: "center",
    backgroundColor: "#eee",
    flex: 1,
    justifyContent: "center",
    padding: 10
  },
  middleButton: {
    borderColor: "#ccc",
    borderLeftWidth: 1,
    borderRightWidth: 1
  }
});

export default function AccelerometerScreen() {
  const [accelerometerData, setAccelerometerData] = useState(initialState);
  const [subscription, setSubscription] = useState<Subscription>();

  function subscribe() {
    const subscription = Accelerometer.addListener(accelerometerData =>
      setAccelerometerData(accelerometerData)
    );
    setSubscription(subscription);
  }

  function unsubscribe() {
    subscription ? subscription.remove() : setSubscription(undefined);
  }

  function toggleSubscription() {
    subscription ? unsubscribe() : subscribe();
  }

  useEffect(() => {
    toggleSubscription();
    return unsubscribe;
  }, []);

  function fast() {
    Accelerometer.setUpdateInterval(16);
  }

  function slow() {
    Accelerometer.setUpdateInterval(1000);
  }

  const x = roundToTwoDecimals(accelerometerData.x);
  const y = roundToTwoDecimals(accelerometerData.y);
  const z = roundToTwoDecimals(accelerometerData.z);

  return (
    <View style={styles.mainContainer}>
      <Text>Accelerometer:</Text>
      <Text>
        x: {x} y: {y} z: {z}
      </Text>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={toggleSubscription} style={styles.button}>
          <Text>Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={slow}
          style={[styles.button, styles.middleButton]}
        >
          <Text>Slow</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fast} style={styles.button}>
          <Text>Fast</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
