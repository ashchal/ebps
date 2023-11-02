import {colors, spacing} from '@src/modules'
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  homeWrapper: {
    flex: 1,
    backgroundColor: colors.light.backgroundColor,
  },

  backgroundWrapper: {
    height: 140,
    width: '100%',
    resizeMode: 'cover',
  },
  shadowTop: {
    width: '100%',
    shadowColor: colors.light.primaryColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  top: {
    height: 140,
    alignItems: 'flex-end',
    paddingBottom: 35,
    paddingHorizontal: spacing.screen.PADDING,
    width: '100%',
  },

  infoWrapper: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },

  toplogo: {
    height: 45,
    width: 45,
    resizeMode: 'contain',
  },
  toptext: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.light.white,
    borderColor: 'red',
    display: 'flex',
    alignItems: 'flex-start',
  },
  searchContainer: {
    backgroundColor: colors.light.white,
    borderRadius: 24,
    position: 'absolute',
    width: '100%',
    height: 50,
    bottom: -25,
    paddingLeft: 20,
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: spacing.default.PADDING,
  },

  searchShadow: {
    width: '100%',
    shadowColor: colors.light.grey100,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  iconWrapper: {
    borderColor: colors.light.white,
    backgroundColor: colors.light.grey300,
    width: 40,
    height: 40,
    padding: 5,
    borderRadius: 20,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderWidth: 1,
  },
  homeBodyWrapper: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: spacing.screen.PADDING,
    gap: 15,
  },
})
