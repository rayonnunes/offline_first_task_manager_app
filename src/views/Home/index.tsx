import React from 'react'
import { ScrollView } from 'react-native'

import { HomeContainer } from './styles'
import ProfileBar from '../components/ProfileBar'
import TaskList from '../components/TaskList'
import ActivityButtons from '../components/ActivityButtons'

const Home = () => {
  return (
    <HomeContainer>
      <ScrollView>
        <ProfileBar />
        <ActivityButtons />
        <TaskList />
      </ScrollView>
    </HomeContainer>
  )
}

export default Home
