import {View, ScrollView, Text} from 'react-native'
import {
  DateInput,
  LongText,
  MultipleChoice,
  NumberInput,
  ShortText,
  TimeInput,
} from './components'

export const FormBuilder = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <ShortText />
        <LongText />
        <DateInput />
        <TimeInput />
        <NumberInput />
        <MultipleChoice />
        <MultipleChoice />
      </View>
    </ScrollView>
  )
}
