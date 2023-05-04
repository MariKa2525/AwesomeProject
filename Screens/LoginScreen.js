import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { useFonts } from 'expo-font'

export const LoginScreen = () => {
  const [fonts] = useFonts({
    RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
    RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
  })

  if (!fonts) {
    return null
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/image/BG.jpg')}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.form}>
          <Text style={styles.title}>Ввійти</Text>
          <TextInput
            style={{
              ...styles.input,
            }}
            placeholder="Адреса електронної пошти"
          />

          <View style={styles.inputPass}>
            <TextInput
              style={{
                ...styles.input,
              }}
              placeholder="Пароль"
            />
            <Text style={styles.textInput}> Показати </Text>
          </View>
          <TouchableOpacity style={styles.button} title="Ввійти">
            <Text style={styles.buttonText}> Ввійти </Text>
          </TouchableOpacity>
          <Text style={styles.textYes}>Не має акаунта? Зареєструватися</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'RobotoRegular',
  },
  image: {
    width: 400,
    height: 812,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    marginTop: 32,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    textAlign: 'center',
    fontFamily: 'RobotoMedium',
  },
  form: {
    marginTop: 33,
    gap: 16,
    backgroundColor: '#fff',
    height: 489,
    width: '100%',
    padding: 16,
  },
  input: {
    height: 50,
    width: 343,
    marginHorizontal: 16,
    paddingHorizontal: 16,

    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    color: '#212121',
    fontSize: 16,
  },
  textInput: {
    position: 'absolute',
    right: 32,
    top: 16,
    color: '#1B4371',
    fontSize: 16,
  },

  button: {
    marginTop: 27,
    backgroundColor: '#FF6C00',
    marginHorizontal: 16,
    padding: 16,
    alignItems: 'center',
    borderRadius: 100,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 19,
  },
  textYes: {
    color: '#1B4371',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
  },
})
