import React, { useCallback, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useColorScheme } from 'react-native'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Routes from './routes'
import store from './store'

import themeColors from './assets/colors'
import storeKeys from './config/storageKeys'

enum StorageThemeProps {
  dark = 'dark',
  light = 'light',
}

const App = () => {
  const deviceTheme = useColorScheme() || 'light' // light, dark, null
  const [storageTheme, setStorageTheme] = useState<StorageThemeProps | null>(
    null,
  )
  const theme = themeColors[storageTheme || deviceTheme]

  const getStorageTheme = useCallback(async () => {
    const value = await AsyncStorage.getItem(storeKeys.themeColors)
    if (value === 'dark') {
      setStorageTheme(StorageThemeProps.dark)
    }
  }, [])

  useEffect(() => {
    getStorageTheme()
  }, [getStorageTheme])

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  )
}

export default App
