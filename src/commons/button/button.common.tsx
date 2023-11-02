import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
  ActivityIndicator,
  TextStyle,
} from 'react-native'

import {colors} from '@src/modules'

import {styles} from './button.style'

interface ButtonProps {
  title?: string
  onPress: (event: GestureResponderEvent) => void
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  disabled?: boolean
  style?: StyleProp<ViewStyle>
  loading?: boolean
  textStyles?: StyleProp<TextStyle>
  secondary?: boolean
}

export const Button = ({
  title,
  leftIcon,
  rightIcon,
  onPress,
  disabled = false,
  style,
  loading = false,
  textStyles,
  secondary,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        style,
        {
          backgroundColor:
            disabled || loading || secondary
              ? colors.light.grey300
              : colors.light.primaryColor,
        },
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}>
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <>
          {leftIcon ? <View>{leftIcon}</View> : null}
          <Text
            style={[
              styles.text,
              {
                color:
                  disabled || loading || secondary
                    ? colors.light.secondaryTextColor
                    : colors.light.white,
              },
              textStyles,
            ]}>
            {title}
          </Text>
          {rightIcon ? <View>{rightIcon}</View> : null}
        </>
      )}
    </TouchableOpacity>
  )
}
