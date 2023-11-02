import React from 'react'
import {View, Text, Button} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {styles} from './documentTypes.style'

interface DocumentTypesScreenProps extends NativeStackScreenProps<any> {}

export const DocumentTypesScreen = ({navigation}: DocumentTypesScreenProps) => {
  const {navigate} = navigation
  return (
    <View style={styles.homeWrapper}>
      <Text>docuemnt types Screen</Text>
      <Button title="next image" onPress={() => navigate('CameraScreen')} />
      <Button title="re click" onPress={() => navigate('CameraScreen')} />
      <Button
        title="Finish and Preview all"
        onPress={() => navigate('AllDocumentViewScreen')}
      />
      <Button title="click next" onPress={() => navigate('CameraScreen')} />
      <Button title="Submit all" onPress={() => navigate('CameraScreen')} />
    </View>
  )
}
