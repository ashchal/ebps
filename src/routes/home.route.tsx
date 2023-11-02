import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {
  AllDocumentViewScreen,
  CameraPreviewScreen,
  CameraScreen,
  DocumentPreviewScreen,
  EntryScreen,
  HomeScreen,
} from '@src/screens/home'
import {ReportScreen} from '@src/screens/report'
import {RejectedScreen} from '@src/screens/rejected'
import {ChangePasswordScreen} from '@src/screens/changePassword'
import {DocumentTypesScreen} from '@src/screens/home/documentTypes'

const Home = createNativeStackNavigator()

export const HomeStack = () => {
  return (
    <Home.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Home.Screen name="EntryScreen" component={EntryScreen} />
      <Home.Screen name="HomeScreen" component={HomeScreen} />
      <Home.Screen name="DocumentTypesScreen" component={DocumentTypesScreen} />
      <Home.Screen name="CameraScreen" component={CameraScreen} />
      <Home.Screen name="CameraPreviewScreen" component={CameraPreviewScreen} />
      <Home.Screen
        name="DocumentPreviewScreen"
        component={DocumentPreviewScreen}
      />
      <Home.Screen
        name="AllDocumentViewScreen"
        component={AllDocumentViewScreen}
      />
    </Home.Navigator>
  )
}

const Report = createNativeStackNavigator()

export const ReportStack = () => {
  return (
    <Report.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Report.Screen name="ReportScreen" component={ReportScreen} />
    </Report.Navigator>
  )
}

const Rejected = createNativeStackNavigator()

export const RejectedStack = () => {
  return (
    <Rejected.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Rejected.Screen name="RejectedScreen" component={RejectedScreen} />
    </Rejected.Navigator>
  )
}

const ChangePassword = createNativeStackNavigator()

export const ChangePasswordStack = () => {
  return (
    <ChangePassword.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ChangePassword.Screen
        name="RejectedScreen"
        component={ChangePasswordScreen}
      />
    </ChangePassword.Navigator>
  )
}
