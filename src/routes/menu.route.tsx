import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import UnscheduledScreen from '@src/screens/unScheduled/unScheduled.screen'
import {Menu} from '@src/screens/menu/menu.screen'

const Stack = createNativeStackNavigator()

export const MenuRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MenuScreen" component={Menu} />
      <Stack.Screen name="unScheduledScreen" component={UnscheduledScreen} />
    </Stack.Navigator>
  )
}
