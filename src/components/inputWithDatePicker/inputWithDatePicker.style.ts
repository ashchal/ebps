import {colors, fonts, spacing} from '@src/modules'
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  inputLabelWrapper: {
    gap: 0,
  },

  inputLabel: {
    fontSize: fonts.size.extLarge,
    color: colors.light.textColor,
  },

  textInput: {
    fontSize: fonts.size.large,
    height: 35,
    padding: 0,
    paddingVertical: 0,
  },

  inputContainer: {
    backgroundColor: colors.light.grey400,
    borderRadius: spacing.radious.DEFAULT,
  },
})
