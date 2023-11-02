import {colors} from '@src/modules'
import {StyleSheet, Platform} from 'react-native'

export const styles = StyleSheet.create({
  customTabBarWrapper: {
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 75 : 50,
    justifyContent: 'space-around',
  },

  iconWrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  topAnimatedBar: {
    position: 'absolute',
    height: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  animatedBar: {
    backgroundColor: colors.light.primaryColor,
    width: 50,
    height: 3,
  },
})
