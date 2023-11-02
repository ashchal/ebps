import React from 'react'
import {Text, StyleProp, TextStyle} from 'react-native'

import {VStack} from '@src/commons'
import {styles} from './section.style'

export const Section = ({
  title,
  children,
  titleStyle,
}: {
  title: string
  children: React.ReactNode
  titleStyle?: StyleProp<TextStyle>
}) => {
  return (
    <VStack>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <VStack style={{gap: 10}}>{children}</VStack>
    </VStack>
  )
}
