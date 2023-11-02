import React from 'react'
import {View, Text, Button} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {styles} from './home.style'

interface HomeProps extends NativeStackScreenProps<any> {}

export const HomeScreen = ({navigation}: HomeProps) => {
  const {navigate} = navigation
  return (
    <View style={styles.homeWrapper}>
      <Text>Home Screenupdate</Text>
      <Button
        title="Parent Types"
        onPress={() => navigate('DocumentTypesScreen')}
      />
      <Button
        title="Finish and Preview all"
        onPress={() => navigate('AllDocumentViewScreen')}
      />
      <Button title="click next" onPress={() => navigate('CameraScreen')} />
      <Button title="Submit all" onPress={() => navigate('CameraScreen')} />
    </View>
  )
}
