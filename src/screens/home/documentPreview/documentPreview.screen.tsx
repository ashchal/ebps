import React from 'react'
import {View, Text, Button} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {styles} from './documentPreview.style'

interface HomeProps extends NativeStackScreenProps<any> {}

export const DocumentPreviewScreen = ({navigation}: HomeProps) => {
  const {navigate} = navigation
  return (
    <View style={styles.documentPreviewWrapper}>
      <Text>Docuemnt Preview Screen</Text>
      <Button title="Retake" onPress={() => navigate('CameraScreen')} />
      <Button title="Click another" onPress={() => navigate('CameraScreen')} />
      <Button
        title="Click Next Document"
        onPress={() => navigate('HomeScreen')}
      />
    </View>
  )
}
