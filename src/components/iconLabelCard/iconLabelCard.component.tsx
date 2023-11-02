import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {StyleProps} from 'react-native-reanimated'

import {HStack} from '@src/commons'
import {styles} from './iconLabelCard.style'

export function IconLabelCard({
  icon,
  title,
  textStyle,
  onPress,
}: {
  icon: React.ReactNode
  title: string
  textStyle?: StyleProps
  onPress?: () => void
}) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <HStack style={styles.wrapper}>
        <View style={styles.iconWrapper}>{icon}</View>
        <Text style={[styles.textWrapper, textStyle]}>{title}</Text>
      </HStack>
    </TouchableOpacity>
  )
}
