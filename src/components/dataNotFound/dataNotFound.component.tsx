import {View, Text} from 'react-native'
import React from 'react'
import {styles} from './dataNotFound.style'
import {colors} from '@src/modules'
import MaIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const DataNotFound = ({
  label,
  subLabel,
}: {
  label: string
  subLabel?: string
}) => {
  return (
    <View style={styles.noResultContainer}>
      <MaIcons name="dog" size={100} color={colors.light.secondaryTextColor} />
      <Text style={styles.noResultTitle}>{label}</Text>
      {subLabel && <Text style={styles.noResultDesc}>{subLabel}</Text>}
    </View>
  )
}
