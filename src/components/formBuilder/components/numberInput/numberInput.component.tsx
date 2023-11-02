import {useState} from 'react'
import {View, Text, TextInput} from 'react-native'

import {styles} from './numberInput.style'

interface NumberInputProps {
  id?: number
  type?: string
}

export const NumberInput = ({id, type}: NumberInputProps) => {
  const [numberContent, setNumberContent] = useState<number>()

  return (
    <View style={styles.textFieldWrapper}>
      <View style={styles.labelWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.label}>{'Number Input'}</Text>
          <Text style={styles.astrick}>*</Text>
        </View>
        {true && <Text style={styles.description}>{'Description'}</Text>}
      </View>
      <View>
        <TextInput
          placeholder="Type Here"
          onChangeText={value => setNumberContent(Number(value))}
          keyboardType={'number-pad'}
          style={styles.numberField}
        />
      </View>
    </View>
  )
}
