import {colors, spacing} from '@src/modules'
import {Dimensions, StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  headWrapper: {
    position: 'relative',
    zIndex: 10,
    backgroundColor: colors.light.backgroundColor,
    paddingHorizontal: spacing.default.PADDING - 3,
  },
  topHeader: {
    // marginTop: 40,
    paddingBottom: 10,
    paddingTop: 10,
    alignItems: 'center',
  },

  backBtn: {
    backgroundColor: colors.light.backgroundColor,
    padding: 10,
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: colors.light.borderColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  topText: {
    color: colors.light.primaryColor,
    fontWeight: 'bold',
    fontSize: 22,
    textAlignVertical: 'center',
  },

  iconWrapper: {
    borderWidth: 1.5,
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: colors.light.borderColor,
    marginLeft: 'auto',
  },

  calenderWrapper: {
    width: Dimensions.get('window').width,
    zIndex: 10,
    overflow: 'hidden',
  },

  calenderStyle: {
    overflow: 'hidden',
  },

  ghostDiv: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    backgroundColor: 'rgba(164, 164, 164, 0.2)',
  },
})
