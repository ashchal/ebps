import React, {useEffect} from 'react'
import {View, Text, ScrollView, Image, Platform} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'

import {useDispatch, useSelector, RootState} from '@src/store'
import {Button, TextInput, VStack} from '@src/commons'
import {useAuth} from '@src/auth'

import {login} from './login.slice'
import {styles} from './login.style'
import {session} from '@src/auth/auth.slice'

type LoginData = {
  email: string
  password: string
}

interface LoginProps extends NativeStackScreenProps<any> {}

const Login = ({}: LoginProps) => {
  const {logIn} = useAuth()
  const dispatch = useDispatch()
  const {loading, success, data} = useSelector(
    (state: RootState) => state.login,
  )

  useEffect(() => {
    if (success && data) {
      dispatch(session({onSuccess: () => logIn()}))
    }
  }, [success, data, logIn, dispatch])

  return (
    <ScrollView style={styles.container}>
      <VStack
        style={[
          styles.login,
          {paddingVertical: Platform.OS === 'ios' ? 50 : 20},
        ]}>
        <View style={styles.right}>
          <View style={styles.help}>
            <Text style={styles.helptext}>Help</Text>
          </View>
        </View>

        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            {/* <Image
              source={require('@src/assets/SmartClerk.png')}
              style={styles.logoImage}
            /> */}
          </View>
        </View>

        <TextInput label="Username" placeholder="Username" />

        <TextInput
          label="Password"
          placeholder="Enter your password"
          secureTextEntry
        />

        <VStack gap={20}>
          <View style={styles.forgetpassowrd}>
            <Text style={styles.forgetpassowrdtext}>Forgot Password</Text>
          </View>

          <Button
            style={styles.loginbutton}
            title="LOG IN"
            loading={loading}
            onPress={() => {}}
          />

          <View style={styles.donthaveaccountcontainer}>
            <View style={styles.donthaveaccount}>
              <Text>Don't have an account?</Text>
              <Text style={styles.signuptext}>Sign up</Text>
            </View>

            <Text style={styles.version}>Version: 1.0.0</Text>
          </View>
        </VStack>
      </VStack>
    </ScrollView>
  )
}

export {Login}
