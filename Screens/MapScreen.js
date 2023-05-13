import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

export const MapScreen = ({ route }) => {
  const { latitude, longitude } = route.params
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        minZoomLevel={15}
      >
        <Marker
          title="Photo"
          coordinate={{ latitude: latitude, longitude: longitude }}
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
  },

  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})
