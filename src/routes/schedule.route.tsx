import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {ScheduleScreen} from '@src/screens/schedule/schedule.screen'
import {JournalScreen} from '@src/screens/journal'
import {TicketScreen} from '@src/screens/ticketInfo/ticketInfo.screen'
import {TimeEntriesScreen} from '@src/screens/ticketInfo/screens/timeEntries'
import {
  FileScreen,
  PdfScreen,
  Photos,
  SingleImageScreen,
} from '@src/screens/ticketInfo/screens'
import {FormScreen} from '@src/screens/forms'

const Stack = createNativeStackNavigator()

export const ScheduleRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />
      <Stack.Screen name="TicketScreen" component={TicketScreen} />
      <Stack.Screen name="JournalScreen" component={JournalScreen} />
      <Stack.Screen name="TimeEntriesScreen" component={TimeEntriesScreen} />
      <Stack.Screen name="PhotosScreen" component={Photos} />
      <Stack.Screen name="FilesScreen" component={FileScreen} />
      <Stack.Screen name="FormScreen" component={FormScreen} />
      <Stack.Screen name="SingleImageScreen" component={SingleImageScreen} />
      <Stack.Screen name="PdfScreen" component={PdfScreen} />
    </Stack.Navigator>
  )
}
