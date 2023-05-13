import React, { useEffect, useState } from 'react'
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
  FlatList,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { collection, onSnapshot } from 'firebase/firestore'
import { db, auth } from '../firebase/config'
import { selectName } from '../redux/auth/authSelectors'
import { useSelector, useDispatch } from 'react-redux'
import PostComponent from '../Components/PostComponent'
import { authSignOutUser } from '../redux/auth/authOperations'

export const ProfileScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [userPosts, setUserPosts] = useState([])
  const userName = useSelector(selectName)

  useEffect(() => {
    getUserPosts()
  }, [])

  const getUserPosts = async () => {
    onSnapshot(collection(db, 'posts'), (snapshot) => {
      const posts = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      setUserPosts(posts)
    })
  }

  const signOut = () => {
    dispatch(authSignOutUser())
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/BG.jpg')}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.wrap}>
            <View style={styles.wrapImage}>
              <AntDesign
                name="closecircleo"
                style={styles.closecircleoIcon}
                size={25}
                color="#E8E8E8"
              />
            </View>
            <View style={styles.wrapIonicons}>
              <Ionicons
                name="exit-outline"
                size={24}
                color="#BDBDBD"
                onPress={signOut}
              />
            </View>
            <Text style={styles.title}>{userName}</Text>

            <FlatList
              data={userPosts}
              style={styles.postsList}
              keyExtractor={(__, index) => index.toString()}
              renderItem={({ item, index }) => (
                <PostComponent
                  post={item}
                  navigation={navigation}
                  isLastItem={index === userPosts.length - 1}
                  forProfileScreen
                />
              )}
            />
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
    fontFamily: 'Roboto-Regular',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  backgroundImage: {
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
  closecircleoIcon: {
    backgroundColor: '#fff',
    position: 'absolute',
    left: 108,
    top: 80,
    borderRadius: 25,
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
    fontFamily: 'Roboto-Medium',
  },
  wrap: {
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

  postsList: {
    marginHorizontal: 8,
    height: '50%',
  },
})
