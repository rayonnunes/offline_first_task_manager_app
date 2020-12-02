import React, { useCallback } from 'react'
import { TouchableOpacity } from 'react-native'
import Text from '../Text'
import withObservables from '@nozbe/with-observables'

const Button = ({ user }: any) => {
  const createTask = useCallback(async () => {
    const newTask = {
      title: "A Bard's Beloved",
      description:
        'Geralt happened across a terrified bard who trembled when he spoke of his "beloved", yet other than that refused to say an ill word about the woman. Even stranger, everything seemed to indicate his betrothed lived in a cave. Geralt decided to check out what sort of curious couple he was dealing with. It turned out the bard\'s "beloved" was a hideous water hag. No wonder the thought of her caress made him shake in fear and revulsion. Geralt dealt with her as he usually deals with monsters.',
      status: 'finished',
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
