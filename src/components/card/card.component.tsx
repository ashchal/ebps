import {View, Text, StyleProp, ViewStyle} from 'react-native'
import React from 'react'

import {styles} from './card.style'

export const Card = ({
  children,
  style,
}: {
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
}) => {
  return <View style={[styles.cardWrapper, style]}>{children}</View>
}
