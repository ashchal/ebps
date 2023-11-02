import React from 'react'
import {View, Text, Button} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {styles} from './cameraPreview.style'

interface HomeProps extends NativeStackScreenProps<any> {}

export const CameraPreviewScreen = ({navigation}: HomeProps) => {
  const {navigate} = navigation
  return (
    <View style={styles.cameraPreviewWrapper}>
      <Text>cameraPreview Screen</Text>
      <Button title="Retake" onPress={() => navigate('CameraScreen')} />
      <Button title="Click another" onPress={() => navigate('CameraScreen')} />
      <Button title="Done" onPress={() => navigate('DocumentPreviewScreen')} />
    </View>
  )
}
