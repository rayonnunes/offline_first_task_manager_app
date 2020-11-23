import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeView from '../views/Home'

const Routes = () => {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
