import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {NavigationContainer} from '@react-navigation/native'

import {AuthRoute} from './auth.route'
import {DrawerNavigator} from './drawer.routes'

const RootRoute = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {true ? <DrawerNavigator /> : <AuthRoute />}
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export {RootRoute}
