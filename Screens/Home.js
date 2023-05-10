import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const AuthStack = createStackNavigator()
const MainTab = createBottomTabNavigator()
import { NavigationContainer } from '@react-navigation/native'
import { LoginScreen } from './LoginScreen'
import { RegistrationScreen } from './RegistrationScreen'
import { PostsScreen } from './PostsScreen'
import { CreatPostsScreen } from './CreatePostsScreen'
import { ProfileScreen } from './ProfileScreen'
import { Header } from '../Components/Header'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { selectIsLogIn, selectRefresh } from '../redux/auth/authSelectors'
import { useDispatch, useSelector } from 'react-redux'

export const Home = () => {
  const isAuth = useSelector(selectIsLogIn)
  const dispatch = useDispatch()

  return (
    <NavigationContainer>
      {isAuth ? (
        <MainTab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              if (route.name === 'Posts') {
                return (
                  <Feather
                    name="grid"
                    size={size}
                    color="rgba(33, 33, 33, 0.8)"
                  />
                )
              } else if (route.name === 'CreatPosts') {
                return (
                  <Ionicons
                    name="add"
                    size={size}
                    color="#FFFFFF"
                    style={styles.addPost}
                  />
                )
              } else if (route.name === 'Profile') {
                return <Feather name="user" size={size} color={color} />
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: '#FF6C00',
            inactiveTintColor: 'rgba(33, 33, 33, 0.8)',
            showLabel: false,
            initialRouteName: 'Posts',
          }}
        >
          <MainTab.Screen
            name="Posts"
            component={PostsScreen}
            options={{
              headerShown: false,
            }}
          />
          <MainTab.Screen
            name="CreatPosts"
            component={CreatPostsScreen}
            options={{
              headerShown: true,
              header: ({ navigation, route }) => <Header title={route.name} />,
            }}
          />
          <MainTab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerShown: false,
              header: ({ navigation, route }) => <Header title={route.name} />,
            }}
          />
        </MainTab.Navigator>
      ) : (
        <AuthStack.Navigator>
          <AuthStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  addPost: {
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#FF6C00',
    width: 70,
    height: 40,
    borderRadius: 20,
  },
})
