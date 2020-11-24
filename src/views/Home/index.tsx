import React from 'react'
import { ScrollView } from 'react-native'
// import { useSelector } from 'react-redux'
// import { StoreState } from '../../store/createStore'

import { HomeContainer } from './styles'
import ProfileBar from '../../components/ProfileBar'
import TaskList from '../../components/TaskList'

const Home = () => {
  // const { workday } = useSelector((state: StoreState) => state)
  return (
    <HomeContainer>
      <ScrollView>
        <ProfileBar />
        <TaskList />
      </ScrollView>
    </HomeContainer>
  )
}

export default Home
