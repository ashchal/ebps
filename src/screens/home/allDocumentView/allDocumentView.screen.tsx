import React from 'react'
import {View, Text, Button} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {styles} from './allDocumentView.style'

interface HomeProps extends NativeStackScreenProps<any> {}

export const AllDocumentViewScreen = ({navigation}: HomeProps) => {
  const {navigate} = navigation

  return (
    <View style={styles.allDocumentViewWrapper}>
      <Text>allDocumentView Screen</Text>
      <Button title="Retake" onPress={() => navigate('CameraScreen')} />
      <Button title="Click another" onPress={() => navigate('CameraScreen')} />

      <Button title="Finish" onPress={() => navigation.goBack()} />
      <Button title="Click next document" onPress={() => navigation.goBack()} />
      <Button title="submit all " onPress={() => navigation.goBack()} />
      <Button title="submit doc type" onPress={() => navigation.goBack()} />
    </View>
  )
}
