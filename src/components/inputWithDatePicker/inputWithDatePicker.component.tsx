import {Text, Pressable, Dimensions} from 'react-native'
import React, {useState, useEffect} from 'react'
import DatePicker from 'react-native-date-picker'
import moment from 'moment'

import {VStack} from '@src/commons'
import {TextInput} from '@src/commons'
import {colors} from '@src/modules'
import {styles} from './inputWithDatePicker.style'

interface IndData {
  id: number
  label: string
  open: boolean
  data: string
  mode: 'date' | 'time'
}

interface DatePickerProps {
  data: IndData
  placeholder?: string
  currentState: IndData[]
  updateState: React.Dispatch<React.SetStateAction<IndData[]>>
  onDateChange?: (a: any) => void
}

export const InputWithDatePicker = ({
  data,
  placeholder,
  currentState,
  updateState,
  onDateChange,
}: DatePickerProps) => {
  const [date, setDate] = useState<Date>(new Date())
  const [value, setValue] = useState<string>()

  useEffect(() => {
    if (date && data.mode === 'date') {
      setValue(moment(date).format('DD/MM/YYYY'))
      onDateChange?.(moment(date).format('DD/MM/YYYY'))
    }
    if (data.mode === 'time') {
      setValue(moment(date).format('hh:mm:ss a'))
      onDateChange?.(moment(date).format('hh:mm:ss a'))
    }
  }, [date])

  const handelFieldPress = () => {
    const temp = [...currentState]
    const temp2 = temp.map(item => {
      if (item.id === data.id) {
        return {
          ...item,
          open: !item.open,
        }
      } else {
        return {
          ...item,
          open: false,
        }
      }
    })

    updateState(temp2)
  }

  return (
    <>
      <Pressable onPress={handelFieldPress}>
        <VStack style={styles.inputLabelWrapper}>
          <Text style={styles.inputLabel}>{data.label}</Text>
          <TextInput
            containerStyle={styles.inputContainer}
            style={styles.textInput}
            placeholder={placeholder ? placeholder : value}
            value={value}
            editable={false}
          />
        </VStack>
      </Pressable>
      {data.open && (
        <DatePicker
          mode={data.mode}
          textColor={colors.light.textColor}
          date={date}
          onDateChange={setDate}
          style={{width: Dimensions.get('window').width - 30}}
        />
      )}
    </>
  )
}
