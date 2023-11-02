import React from 'react'
import {View, Text} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {styles} from './report.style'

interface HomeProps extends NativeStackScreenProps<any> {}

const ReportScreen = ({navigation}: HomeProps) => {
  return (
    <View style={styles.homeWrapper}>
      <Text>hello</Text>
    </View>
  )
}

export {ReportScreen}
