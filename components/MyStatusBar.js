import React from 'react'
import { View, Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'

export default function MyStatusBar({ ...props }) {

  const backgroundColor = props.backgroundColor ? props.backgroundColor : '#fff'
  const statusBarHeight = Platform.OS === 'ios' ? Constants.statusBarHeight : 0

  return (
    <View
      style={{ backgroundColor: props.backgroundColor, height: statusBarHeight }}>
      <StatusBar{...props}
      />
    </View>


  )
}