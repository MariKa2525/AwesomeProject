import React, { createRef, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { SimpleLineIcons } from '@expo/vector-icons'
import { useFonts } from 'expo-font'

export const CommentsScreen = () => {
  const [fonts] = useFonts({
    RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
    RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
  })

  if (!fonts) {
    return null
  }
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.wrap}>
          <View style={styles.cardImageWrap}>
            <Image
              source={{ uri: 'https://reactjs.org/logo-og.png' }}
              style={styles.cardImage}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'RobotoRegular',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  image: {
    width: 400,
    height: 812,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  wrapImage: {
    position: 'absolute',
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',

    borderRadius: 16,
    top: -60,
    left: 141,
  },
  buttonAddPhoto: {
    position: 'absolute',
    left: 108,
    top: 80,
    borderRadius: 12.5,
  },
  wrapIonicons: {
    position: 'absolute',
    right: 30,
    top: 18,
  },

  title: {
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    textAlign: 'center',
    fontFamily: 'RobotoMedium',
  },
  wrap: {
    // marginTop: 33,
    display: 'flex',
    gap: 16,
    backgroundColor: '#fff',
    height: '84%',
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  card: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  cardImage: {
    width: 343,
    height: 240,
  },
  cardImageWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    marginTop: 8,
    marginStart: 16,
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.01,
    textAlign: 'start',
    fontFamily: 'RobotoMedium',
  },
  cardInner: {
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 8,
  },
  cardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    marginRight: 24,
    marginStart: 16,
    justifyContent: 'flex-start',
  },
  cardWrapperMap: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    marginLeft: 90,
    marginRight: 16,
    marginStart: 16,
    // justifyContent: 'flex-end',
  },
  cardNumber: {
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.01,
    fontFamily: 'RobotoMedium',
  },
  cardLink: {
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.01,
    fontFamily: 'RobotoMedium',
  },
})
