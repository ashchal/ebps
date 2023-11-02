import React from 'react'
import {View, Text, Button} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {styles} from './camera.style'

interface HomeProps extends NativeStackScreenProps<any> {}

export const CameraScreen = ({navigation}: HomeProps) => {
  const {navigate} = navigation

  return (
    <View style={styles.cameraWrapper}>
      <Text>Camera Screen</Text>
      <Button title="HomeScreen" onPress={() => navigate('HomeScreen')} />
    </View>
  )
}
