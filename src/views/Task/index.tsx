import React from 'react'
import { View, Text } from 'react-native'
import { TaskScreenNavigationProp } from '../../routes/types'

const Task = ({ route }: { route: TaskScreenNavigationProp }) => {
  const { task } = route.params
  const { title, id } = task
  console.log('taskTitle', title)
  console.log('taskId', id)
  return (
    <View>
      <Text>Hello From task</Text>
    </View>
  )
}

export default Task
