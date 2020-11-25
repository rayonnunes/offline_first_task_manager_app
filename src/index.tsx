import React, { useCallback, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useColorScheme } from 'react-native'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import Routes from './routes'
import store from './store'

import themeColors from './assets/colors'
import storeKeys from './config/storageKeys'

import schema from './model/schema'
import Tasks from './model/Tasks'
import User from './model/User'
import CheckIn from './model/CheckIn'
import CheckOut from './model/CheckOut'
// import Post from './model/Post' // ⬅️ You'll import your Models here

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
  schema,
  synchronous: true,
})

const database = new Database({
  adapter,
  modelClasses: [
    Tasks,
    User,
    CheckIn,
    CheckOut,
    // Post, // ⬅️ You'll add Models to Watermelon here
  ],
  actionsEnabled: true,
})
const createTask = async () => {
  const tasksCollection = database.collections.get('tasks')
  const allTasks = await tasksCollection.query().fetch()
  console.log(allTasks[0]._raw)
}

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

  useEffect(() => {
    createTask()
  }, [])

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  )
}

export default App
