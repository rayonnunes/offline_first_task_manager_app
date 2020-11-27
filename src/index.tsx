import React, { useCallback, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useColorScheme } from 'react-native'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider'

import schema from './model/schema'
import Tasks from './model/Tasks'
import User from './model/User'
import CheckIn from './model/CheckIn'
import CheckOut from './model/CheckOut'

const adapter = new SQLiteAdapter({
  dbName: 'OfflineTasksDB',
  schema,
})

const database = new Database({
  adapter,
  modelClasses: [Tasks, User, CheckIn, CheckOut],
  actionsEnabled: true,
})

import Routes from './routes'
import store from './store'

import themeColors from './assets/colors'
import storeKeys from './config/storageKeys'

const App = () => {
  const deviceTheme = useColorScheme() || 'light' // light, dark, null
  const [storageTheme, setStorageTheme] = useState<'light' | 'dark' | null>(
    null,
  )
  const theme = themeColors.dark || themeColors[storageTheme || deviceTheme]

  const getStorageTheme = useCallback(async () => {
    const value = await AsyncStorage.getItem(storeKeys.themeColors)
    if (value === 'dark') {
      setStorageTheme(value)
    } else if (value === 'light') {
      setStorageTheme(value)
    }
  }, [])

  useEffect(() => {
    getStorageTheme()
  }, [getStorageTheme])

  return (
    <Provider store={store}>
      <DatabaseProvider database={database}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </DatabaseProvider>
    </Provider>
  )
}

export default App
