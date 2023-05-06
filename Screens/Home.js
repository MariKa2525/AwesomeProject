import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useFonts } from 'expo-font'

export const Home = () => {
  const [fontsLoaded] = useFonts({
    RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }

  return <></>
}

const styles = StyleSheet.create({
  button: {
    width: 24,
    height: 24,
  },
})
