import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicon from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Colors } from '@/constants/Colors'

const TabLaout = () => {
  const colorScheme = useColorScheme() ?? 'light'
  return (
    <Tabs screenOptions={{
       tabBarActiveTintColor: Colors.PRIMARY,
       tabBarInactiveTintColor: Colors[colorScheme].tabIconDefault,
       headerShown: false
    }}>
      <Tabs.Screen name='Home' options={{ tabBarIcon: ({ color }) => <Ionicon name='home' size={24} color={color} /> }} />
      <Tabs.Screen name='Favourite' options={{ tabBarIcon: ({ color }) => <Ionicon name='heart-half-sharp' size={24} color={color} /> }} />
      <Tabs.Screen name='Cart' options={{ tabBarIcon: ({ color }) => <FontAwesome6 name="bag-shopping" size={24} color={color} /> }} />
      <Tabs.Screen name='Notify' options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bell" size={24} color={color} /> }} />
    </Tabs>
  )
}

export default TabLaout