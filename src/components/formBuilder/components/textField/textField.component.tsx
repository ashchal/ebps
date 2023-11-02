import {View, TextInput as TextField, Text} from 'react-native'
import Reactotron from 'reactotron-react-native'

import {styles} from './textField.style'
import {useState} from 'react'

interface TextFieldProps {
  id?: number
  type?: ''
}

export const ShortText = ({id, type}: TextFieldProps) => {
  const [shortTextContent, setShortTextContent] = useState<string>()

  return (
    <View style={styles.textFieldWrapper}>
      <View style={styles.labelWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.label}>{'Short Text'}</Text>
          <Text style={styles.astrick}>*</Text>
        </View>
        {true && <Text style={styles.description}>{'Description'}</Text>}
      </View>
      <View style={styles.fieldWrapper}>
        <TextField
          placeholder="Type here"
          onChangeText={data => setShortTextContent(data)}
          value={shortTextContent}
          style={styles.textField}
        />
      </View>
    </View>
  )
}

export const LongText = ({id, type}: TextFieldProps) => {
  const [longTextContent, setLongTextContent] = useState<string>()

  //   Reactotron.log!(longTextContent, 'text area value')

  return (
    <View style={styles.textFieldWrapper}>
      <View style={styles.labelWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.label}>{'Long Text'}</Text>
          <Text style={styles.astrick}>*</Text>
        </View>
        {true && <Text style={styles.description}>{'Description'}</Text>}
      </View>
      <View style={styles.fieldWrapper}>
        <TextField
          multiline={true}
          numberOfLines={4}
          placeholder="Type here"
          onChangeText={data => setLongTextContent(data)}
          value={longTextContent}
          style={styles.textArea}
        />
      </View>
    </View>
  )
}
