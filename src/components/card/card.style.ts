import {colors, spacing} from '@src/modules'
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: colors.light.white,

    shadowColor: colors.light.grey100,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,

    borderColor: colors.light.grey100,

    display: 'flex',
    justifyContent: 'center',
    padding: 5,
    borderRadius: spacing.radious.MEDIUM,
  },
})
