import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

import { StoreState } from '../store/createStore'

const Home = () => {
  const { user } = useSelector((state: StoreState) => state)
  const message = JSON.stringify(user)
  return (
    <View>
      <Text>{message}</Text>
    </View>
  )
}

export default Home
