import {useState} from 'react'
import {View, Text, Pressable, Dimensions} from 'react-native'
import DatePicker from 'react-native-date-picker'
import moment from 'moment'
import IoIcons from 'react-native-vector-icons/Ionicons'

import {colors} from '@src/modules'
import {styles} from './timeInput.style'

interface TimeInputProps {
  id?: number
  type?: string
}

export const TimeInput = ({id, type}: TimeInputProps) => {
  const [timeContent, setTimeContent] = useState<any>()
  const [showCalender, setShowCalender] = useState<boolean>(false)

  return (
    <View style={styles.textFieldWrapper}>
      <View style={styles.labelWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.label}>{'Time Input'}</Text>
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
          <IoIcons
            name="time-outline"
            color={colors.light.primaryColor}
            size={22}
          />
        </Pressable>
      </View>
      <DatePicker
        modal
        open={showCalender}
        date={moment(timeContent).toDate()}
        onConfirm={time => {
          setShowCalender(false)
          setTimeContent?.(moment(time))
        }}
        onCancel={() => {
          setShowCalender(false)
        }}
        mode={'time'}
        style={{width: Dimensions.get('window').width - 30}}
      />
    </View>
  )
}
