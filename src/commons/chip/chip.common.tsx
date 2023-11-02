import React, {PropsWithChildren} from 'react'
import {StyleProp, View, ViewStyle} from 'react-native'

// import {colors} from '@src/modules';

import {styles} from './chip.style'

interface ChipProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>
  color: string
}

const Chip = ({children, style, color}: ChipProps) => {
  return (
    <View style={[styles.titleCount, style, {backgroundColor: color}]}>
      {children}
    </View>
  )
}

export {Chip}
