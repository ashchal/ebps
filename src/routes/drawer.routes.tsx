import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer'
import {colors, fonts} from '@src/modules'
import {Dimensions, Text, View} from 'react-native'
import IoIcons from 'react-native-vector-icons/Ionicons'
import {
  ChangePasswordStack,
  HomeStack,
  RejectedStack,
  ReportStack,
} from './home.route'

// DRAWER
const Drawer = createDrawerNavigator()
export const DrawerNavigator = () => {
  // appVersion !== ANDROID_VERSION_NAME
  return (
    <Drawer.Navigator drawerContent={props => <DrawerComponent {...props} />}>
      <Drawer.Screen name="HomeStack" component={HomeStack} />

      <Drawer.Screen name="ReportStack" component={ReportStack} />
      <Drawer.Screen
        name="ChangePasswordStack"
        component={ChangePasswordStack}
      />
      <Drawer.Screen name="RejectedStack" component={RejectedStack} />
    </Drawer.Navigator>
  )
}

// DIMENSIONS
const height = Dimensions.get('window').height

const adminDrawerItems = [
  {
    label: 'Home',
    name: 'HomeStack',
    icon: <IoIcons name="mail" size={22} color={colors.light.primaryColor} />,
  },
  {
    label: 'Report',
    name: 'ReportStack',
    icon: <IoIcons name="mail" size={22} color={colors.light.primaryColor} />,
  },
  {
    label: 'Change Password',
    name: 'ChangePasswordStack',
    icon: <IoIcons name="mail" size={22} color={colors.light.primaryColor} />,
  },
  {
    label: 'Rejected Pages',
    name: 'RejectedStack',
    icon: <IoIcons name="mail" size={22} color={colors.light.primaryColor} />,
  },
]
export function DrawerComponent(props: any) {
  return (
    <DrawerContentScrollView>
      <View style={{flex: 1, height: height}}>
        <View
          style={{
            height: 220,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomColor: colors.light.grey300,
            borderBottomWidth: 1,
            marginBottom: 20,
          }}>
          <View>
            <Text>Province Government</Text>
          </View>
        </View>
        {adminDrawerItems.map(({label, name, icon}, index) => (
          <DrawerItem
            key={index}
            label={label}
            onPress={() => {
              props.navigation.navigate(name)
            }}
            labelStyle={{
              fontSize: fonts.size.small,
            }}
            icon={() => (
              <View
                style={{
                  width: 22,
                }}>
                {icon}
              </View>
            )}
          />
        ))}
      </View>
    </DrawerContentScrollView>
  )
}
