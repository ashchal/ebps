import {colors} from '@src/modules'
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  textFieldWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 20,
  },
  labelWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    width: '100%',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 7,
  },
  astrick: {
    color: 'red',
    fontWeight: '800',
    fontSize: 16,
  },
  label: {
    color: colors.light.black100,
    fontWeight: '800',
    fontSize: 18,
  },
  description: {
    fontSize: 16,
    color: colors.light.black200,
    marginBottom: 4,
  },
  datePicketWrapper: {},
  iconWrapper: {
    borderWidth: 1.5,
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: colors.light.borderColor,
  },
})
