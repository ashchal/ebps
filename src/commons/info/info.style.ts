import {colors, spacing} from '@src/modules'
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  infoWrapper: {
    padding: 20,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 1,
    borderRadius: spacing.radious.DEFAULT,
  },

  iconWrapper: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    marginTop: 1,
  },

  text: {
    flex: 1,
  },
})
