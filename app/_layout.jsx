import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { Slot, Stack } from 'expo-router'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import App from './index';
import CalendarInstance from './calendarInstance';
import APOD from './APOD';

const Stack = createNativeStackNavigator();

const RootLayout = () => {
  return (
  // <Stack>
  //   <Stack.Screen name='index' options={{ headerShown: false }}/>
  //   {/* <Stack.Screen name='APOD' options={{ headerShown: false }}/>  */}
  // </Stack>
    // <NavigationContainer>
      <Stack.Navigator initialRouteName='index'>
        <Stack.Screen name='index' component={App} options={{ headerShown: false, title: "Home" }}/>
        <Stack.Screen name='calendarInstance' component={CalendarInstance} options={{ headerShown: false, title: "Calendar" }}/>
        <Stack.Screen name='APOD' component={APOD} options={{ headerShown: false, title: "Astronomy Picture Of the Day"}}/>
      </Stack.Navigator>
    //</NavigationContainer>
  )
}

export default RootLayout
