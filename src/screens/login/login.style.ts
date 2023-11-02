import {StyleSheet} from 'react-native'

import {colors, fonts} from '@src/modules'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.light.backgroundColor,
  },
  login: {
    height: '100%',
    flexDirection: 'column',
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  help: {
    backgroundColor: colors.light.primaryColor,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  helptext: {
    fontWeight: 'bold',
    color: colors.light.white,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  logo: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  logoImage: {
    aspectRatio: 1,
    height: 100,
    resizeMode: 'contain',
  },
  forgetpassowrd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  forgetpassowrdtext: {
    color: colors.light.primaryColor,
  },
  loginbutton: {
    backgroundColor: colors.light.primaryColor,
    fontSize: fonts.size.large,
    height: 40,
  },
  donthaveaccountcontainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  donthaveaccount: {
    flexDirection: 'row',
  },
  signuptext: {
    color: colors.light.primaryColor,
    marginLeft: 5,
  },
  version: {
    color: colors.light.grey200,
    marginTop: 20,
  },
})

export {styles}
