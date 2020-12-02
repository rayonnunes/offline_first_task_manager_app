import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeView from '../views/Home'
import TaskView from '../views/Task'

const Routes = () => {
  const themeContext = useContext(ThemeContext)
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      card: themeContext.backgroundContainer,
      text: themeContext.textColor,
    },
  }
  const Stack = createStackNavigator()

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="Task" component={TaskView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
