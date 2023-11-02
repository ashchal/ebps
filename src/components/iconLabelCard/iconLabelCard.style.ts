import {colors, spacing} from '@src/modules'
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: spacing.screen.PADDING,
    gap: 4,
    backgroundColor: colors.light.white,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: colors.light.borderColor,
  },

  textWrapper: {
    fontSize: 16,
    color: colors.light.textColor,
    fontWeight: '500',
  },

  iconWrapper: {
    width: 25,
  },
})
