import {useState} from 'react'
import {View, Text, Pressable, Dimensions} from 'react-native'
import DatePicker from 'react-native-date-picker'
import AnIcon from 'react-native-vector-icons/AntDesign'
import moment from 'moment'

import {styles} from './dateInput.style'
import {colors} from '@src/modules'

interface DateInputProps {
  id?: number
  type?: string
}

export const DateInput = ({id, type}: DateInputProps) => {
  const [dateContent, setDateContent] = useState<any>()
  const [showCalender, setShowCalender] = useState<boolean>(false)

  return (
    <View style={styles.textFieldWrapper}>
      <View style={styles.labelWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.label}>{'Date Input'}</Text>
          <Text style={styles.astrick}>*</Text>
        </View>
        {true && <Text style={styles.description}>{'Description'}</Text>}
      </View>
      <View style={styles.datePicketWrapper}>
        <Pressable
          style={styles.iconWrapper}
          onPress={() => {
            setShowCalender(prev => !prev)
          }}>
          <AnIcon name="calendar" color={colors.light.primaryColor} size={18} />
        </Pressable>
      </View>
      <DatePicker
        modal
        open={showCalender}
        date={moment(dateContent).toDate()}
        onConfirm={date => {
          setShowCalender(false)
          setDateContent?.(moment(date))
        }}
        onCancel={() => {
          setShowCalender(false)
        }}
        mode={'date'}
        style={{width: Dimensions.get('window').width - 30}}
      />
    </View>
  )
}
