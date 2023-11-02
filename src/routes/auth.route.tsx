import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {ScreenWrapper} from '@src/commons'
import {Login} from '@src/screens/login'

const AuthStack = createNativeStackNavigator()
const AuthRoute = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="AuthLogin">
        {props => (
          <ScreenWrapper>
            <Login {...props} />
          </ScreenWrapper>
        )}
      </AuthStack.Screen>
    </AuthStack.Navigator>
  )
}

export {AuthRoute}
