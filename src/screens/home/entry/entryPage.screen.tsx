import React from 'react'
import {View, Text, Button} from 'react-native'
import {styles} from './entryPage.style'
import {useNavigation} from '@react-navigation/native'

export const EntryScreen = () => {
  const navigation = useNavigation()
  const {navigate} = navigation
  return (
    <View style={styles.entryWrapper}>
      <Text>EntryPageScreenupdate</Text>
      <Button title="Go to Home" onPress={() => navigate('HomeScreen')} />
    </View>
  )
}
