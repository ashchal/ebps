import {colors, fonts, spacing} from '@src/modules'
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  topContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: colors.light.borderColor,
  },

  hide: {
    opacity: 0,
  },

  modalTitle: {
    color: colors.light.textColor,
    fontWeight: '600',
    fontSize: 16,
    paddingVertical: spacing.default.PADDING,
  },

  closeText: {
    color: colors.light.primaryColor,
    fontSize: fonts.size.large,
    padding: spacing.default.PADDING,
  },

  bodyContainer: {
    width: '100%',
  },

  infoContainer: {
    width: '100%',
    padding: 10,
  },

  contactTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.light.primaryColor,
  },

  subTitle: {
    color: colors.light.secondaryTextColor,
  },
})
