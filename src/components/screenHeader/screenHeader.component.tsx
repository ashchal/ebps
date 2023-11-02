import {View, Text, TouchableOpacity, Pressable, Dimensions} from 'react-native'
import React, {useState} from 'react'
import DatePicker from 'react-native-date-picker'
import moment, {Moment} from 'moment'
import IonIcon from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'

import {HStack, VStack} from '@src/commons'
import {styles} from './screenHeader.style'

export function ScreenHeader({
  title,
  showBack = true,
  rightIcon,
  calender = false,
  onDateChange,
  currentDate,
}: {
  title: string
  showBack?: boolean
  rightIcon?: React.ReactNode
  calender?: boolean
  onDateChange?: (date: Moment) => void
  onMonthChange?: (month: string) => void
  currentDate?: Moment
}) {
  const navigation = useNavigation()
  const [showCalender, setShowCalender] = useState<boolean>(false)

  return (
    <>
      <VStack style={styles.headWrapper}>
        <HStack style={styles.topHeader}>
          {showBack && (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack()
              }}>
              <View>
                <View style={styles.backBtn}>
                  <IonIcon name="chevron-back" size={20} />
                </View>
              </View>
            </TouchableOpacity>
          )}
          <Text style={styles.topText}>{title}</Text>
          {!!rightIcon && (
            <Pressable
              style={styles.iconWrapper}
              onPress={() => {
                calender && setShowCalender(prev => !prev)
              }}>
              <View>{rightIcon}</View>
            </Pressable>
          )}
        </HStack>

        <DatePicker
          modal
          open={showCalender}
          date={moment(currentDate).toDate()}
          onConfirm={date => {
            setShowCalender(false)
            onDateChange?.(moment(date))
          }}
          onCancel={() => {
            setShowCalender(false)
          }}
          mode={'date'}
          style={{width: Dimensions.get('window').width - 30}}
        />
      </VStack>
    </>
  )
}
