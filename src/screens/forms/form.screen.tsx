import {View, Text} from 'react-native'

import {ScreenHeader, FormBuilder} from '@src/components'
import {ScreenWrapper} from '@src/commons'

import {styles} from './form.style'

export const FormScreen = () => {
  return (
    <ScreenWrapper>
      <View>
        <ScreenHeader title={'Form One'} />
      </View>
      <View style={styles.contentWrapper}>
        <FormBuilder />
      </View>
    </ScreenWrapper>
  )
}
