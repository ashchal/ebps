import React, {PropsWithChildren} from 'react'
import {View, StatusBar, ScrollView} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import {styles} from './screenWrapper.style'

interface ScreenWrapperProps extends PropsWithChildren {}

const ScreenWrapper = ({children}: ScreenWrapperProps) => (
  <SafeAreaView style={styles.safeAreaContainer}>
    <StatusBar barStyle="dark-content" />
    <View style={styles.container}>{children}</View>
  </SafeAreaView>
)

export {ScreenWrapper}
