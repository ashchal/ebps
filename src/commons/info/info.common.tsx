import {View, Text} from 'react-native'
import React from 'react'
import {HStack} from '../hStack'
import {styles} from './info.style'
import FaIcon from 'react-native-vector-icons/FontAwesome5'
import {colors} from '@src/modules'
import {useState, useEffect} from 'react'

interface InfoProps {
  type: 'msg' | 'critical' | 'warning' | 'error'
  msg: string
}

export function Info({type, msg}: InfoProps) {
  const [backgroundColor, setBackgroundColor] = useState<string>('')

  const getIcon = () => {
    switch (type) {
      case 'msg':
        return (
          <FaIcon
            name="info-circle"
            size={18}
            color={colors.light.primaryColor}
          />
        )
    }
  }

  useEffect(() => {
    setBackgroundColor(`${colors.light.primary500}80`)
  }, [type])

  return (
    <HStack style={[styles.infoWrapper, {backgroundColor: backgroundColor}]}>
      <HStack style={styles.iconWrapper}>{getIcon()}</HStack>
      <Text style={styles.text}>{msg}</Text>
    </HStack>
  )
}
