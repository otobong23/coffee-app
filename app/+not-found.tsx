import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const NotFoundScreen = () => {
   return (
      <>
         <Stack.Screen options={{ title: 'Oops!' }} />
         <View>
            <Text>This screen does not exist.</Text>
         </View>
      </>
   )
}

export default NotFoundScreen