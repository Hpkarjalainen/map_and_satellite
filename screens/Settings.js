import { StyleSheet, View, Text } from 'react-native'
import React, { useState } from 'react'
import NavigateBackAppBar from '../components/NavigateBackAppBar'
import { Picker } from '@react-native-picker/picker';

export default function Settings({ ...props }) {
  const [selectedType, setSelectedType] = useState(props.mapType)

  return (
    <>
      <NavigateBackAppBar {...props} />
      <View style={styles.container}>
        <Text style={styles.text}>MAP TYPE:</Text>
        <Picker  
          selectedValue={selectedType}
          onValueChange={(itemValue) => {
            setSelectedType(itemValue)
            props.setMapType(itemValue)
            props.navigation.goBack()
            console.log('Selected Map Type:', itemValue);
          }}
        >
          <Picker.Item label="Standard" value="standard" />
          <Picker.Item label="Terrain" value="terrain" />
          <Picker.Item label="Satellite" value="satellite" />
        </Picker>
      </View>
    </>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16
  },
  text: {
    fontSize:20

  }
});