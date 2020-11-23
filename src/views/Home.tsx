import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { StoreState } from '../store/createStore'

import ProfileBar from '../components/ProfileBar'

const Home = () => {
  const { user, tasks, workday } = useSelector((state: StoreState) => state)
  return (
    <View>
      <ProfileBar.Container>
        <ProfileBar.Avatar source={{ uri: 'https://picsum.photos/200' }} />
        <ProfileBar.Text>
          Hello, {user.userData.name} {user.userData.lastName}
        </ProfileBar.Text>
        <ProfileBar.DateTime />
      </ProfileBar.Container>
      <Text>{JSON.stringify(workday)}</Text>
      <Text>{JSON.stringify(tasks)}</Text>
    </View>
  )
}

export default Home
