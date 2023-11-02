import React from 'react'
import {Provider} from 'react-redux'
import 'react-native-reanimated'

import {RootRoute} from './routes'
import {store} from './store'
import {AuthProvider} from '@src/auth'

/**
 * Root level component where all the providers should be defined
 */
const Root = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <RootRoute />
      </AuthProvider>
    </Provider>
  )
}

export default Root
