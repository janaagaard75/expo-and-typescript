import React from "react";
import MapView from "react-native-maps";

export const MapViewScreen = () => (
  <MapView
    style={{ flex: 1 }}
    initialRegion={{
      latitude: 55.6838499,
      latitudeDelta: 0.1,
      longitude: 12.5630238,
      longitudeDelta: 0.1,
    }}
  />
);
