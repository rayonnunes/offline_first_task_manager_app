import React, { useCallback } from 'react'
import { TouchableOpacity } from 'react-native'
import Text from '../Text'
import withObservables from '@nozbe/with-observables'

const Button = ({ user }: any) => {
  const createTask = useCallback(async () => {
    const newTask = {
      title: 'Gwent: Old Pals',
      description:
        'Gwent is played for pleasure, a pleasure that is highest when playing in good company - and the best company of all is that of old and true friends. Geralt thus sought out some of his long-time companions for a hand or two of gwent - and the chance to win powerful cards from each of them. Geralt had a wonderful time slapping down cards with familiar faces and added several powerful new cards to his collection while he was at it.',
      status: 'started',
      dueDateTime: new Date().getTime(),
    }
    await user.addTask(newTask)
  }, [user])

  return (
    <TouchableOpacity onPress={() => createTask()}>
      <Text> Create Offline Task </Text>
    </TouchableOpacity>
  )
}

const enhance = withObservables(['user'], ({ user }) => {
  return {
    user,
  }
})

export default enhance(Button)
