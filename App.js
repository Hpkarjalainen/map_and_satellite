import Map from './screens/Map';
import Settings from './screens/Settings';
import MyStatusBar from './components/MyStatusBar'
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

export default function App() {

  const [mapType, setMapType] = useState('standard')
  const Stack = createNativeStackNavigator()

  const settings = {
    backgroundColor: '#49D295'
  }

  return (
    <>
      <MyStatusBar backgroundColor={settings.backgroundColor} barStyle='light-content'
      />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='map' screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Map">
              {(props) =>
                <Map {...props}
                  backgroundColor={settings.backgroundColor}
                  title="map demo"
                  mapType={mapType}
                />
              }
            </Stack.Screen>
            <Stack.Screen name="settings">
              {(props) =>
                <Settings {...props} /* these props are received from upper level parent, and passed to settings */
                  backgroundColor={settings.backgroundColor}
                  mapType={mapType}
                  setMapType={setMapType}
                />
              }
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
