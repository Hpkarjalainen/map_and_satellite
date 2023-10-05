import { useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'
import MapApplicationBar from '../components/MapApplicationBar';

const icons = {
  location: 'my-location',
  location_searching: 'location-searching'
}

export default function Map({ ...props }) {
  const [searchIcon, setSearchIcon] = useState(icons.location)
  const [marker, setMarker] = useState(null)

  const [location, setLocation] = useState({ /* Show the whole map of Finland */
    latitude: 64,
    longitude: 26,
    latitudeDelta: 12,
    longitudeDelta: 12,
  })

  const getUserPosition = async () => {
    setSearchIcon(icons.location_searching)
    let { status } = await Location.requestForegroundPermissionsAsync() //returns an object, and we take the status-part of it
    console.log(status)
    try {
      if (status !== 'granted') {
        console.log("Not granted")
        return  //exit from the function
      }

      const position = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High })
      //...spread operator, copies the existing object, and then replace the lati and longi
      setLocation({ ...location, "latitude": position.coords.latitude, "longitude": position.coords.longitude })
      setSearchIcon(icons.location)
      setMarker(position.coords)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <MapApplicationBar {...props} locationIcon={searchIcon} keijo={getUserPosition} />
      <MapView
        style={styles.map}
        initialRegion={location}
        mapType={props.mapType}
      >
        {
          marker &&
          <Marker
            title='My position'
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }} />
        }
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%'
  }
});
