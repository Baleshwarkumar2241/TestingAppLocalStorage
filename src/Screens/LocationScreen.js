import { Dimensions, Pressable, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackHeader from '../components/BackHeader'

import Geolocation from 'react-native-geolocation-service';

const { width, height } = Dimensions.get("screen")


import MapView, {
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";

const LocationScreen = () => {
  const [lat, setLat] = useState(null)
  const [long, setLong] = useState(null)


  useEffect(() => {
    getGeoLocation()
  }, [])

  function getGeoLocation() {
    Geolocation.getCurrentPosition(
      (position) => {
        // console.log("position Data", position);
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
      },
      (error) => {
        console.error("errr", error);
      },
      {
        enableHighAccuracy: false,
        timeout: 20000,
        maximumAge: 1000,
      }
    );

  };


  const orderTracking = () => {
    if (lat !== null && long !== null) {
      return (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            region={{
              latitude: lat,
              longitude: long,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude: lat,
                longitude: long,
              }}
            >
              <Image
                source={require("../assest/location.png")}
                style={{ width: 35, height: 35 }}
              />
            </Marker>
          </MapView>
        </View>
      );
    } else {
      return (
        <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1, justifyContent: 'center' }} />
      )
    }
  }

  return (
    <View style={{flex:1}}>
      <BackHeader headerName={"Location"} />
      {orderTracking()}
    </View>
  )
}

export default LocationScreen

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    height: height,
    width: width,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
