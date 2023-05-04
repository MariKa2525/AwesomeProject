import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useFonts } from 'expo-font'

export const RegistrationScreen = () => {
  const [login, setLogin] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = () => {
    Alert.alert('Credentials', `${login} + ${email} + ${pass}`)
  }

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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.form}>
            <View style={styles.wrapImage}>
              <AntDesign
                name="pluscircleo"
                size={25}
                color="#FF6C00"
                backgroundColor="white"
                style={styles.buttonAddPhoto}
              />
            </View>
            <Text style={styles.title}>Регістрація</Text>
            <TextInput
              style={{
                ...styles.input,
              }}
              placeholder="Логін"
              value={login}
              onChangeText={setLogin}
            />
            <TextInput
              style={{
                ...styles.input,
              }}
              placeholder="Адреса електронної пошти"
              value={email}
              onChangeText={setEmail}
              autoComplete="email"
            />
            <KeyboardAvoidingView
              behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
              <View style={styles.inputPass}>
                <TextInput
                  style={{
                    ...styles.input,
                  }}
                  placeholder="Пароль"
                  value={password}
                  onChangeText={setPassword}
                  autoComplete="password"
                />

                <Text style={styles.textInput}> Показати </Text>
              </View>
            </KeyboardAvoidingView>
            <TouchableOpacity
              style={styles.button}
              title="Зареєструватись"
              onPress={onLogin}
            >
              <Text style={styles.buttonText}> Зареєструватись </Text>
            </TouchableOpacity>
            <Text style={styles.textYes}>Вже існує акаунт? Ввійти</Text>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'RobotoRegular',
    // alignItems: "center",
    // justifyContent: "flex-end",
    // paddingBottom: 30
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
    top: -70,
    left: 128,
  },
  buttonAddPhoto: {
    position: 'absolute',
    left: 108,
    top: 80,
    borderRadius: 12.5,
  },

  title: {
    marginTop: 92,
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
    height: 549,
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
