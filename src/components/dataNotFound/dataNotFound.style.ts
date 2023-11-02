import {colors, fonts} from '@src/modules'
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  noResultContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 150,
  },

  noResultTitle: {
    fontWeight: '600',
    fontSize: fonts.size.extraextLarge,
    color: colors.light.primaryColor,
  },

  noResultDesc: {
    fontSize: fonts.size.large,
  },
})
