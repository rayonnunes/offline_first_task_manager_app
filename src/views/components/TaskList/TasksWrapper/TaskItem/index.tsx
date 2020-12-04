import React from 'react'
import { View } from 'react-native'
import format from 'date-fns/format'
import withObservables from '@nozbe/with-observables'
import { useNavigation } from '@react-navigation/native'

import { TasksResponseProps } from '../../../../../store/modules/tasks/types'
import { TaskScreenNavigationProp } from '../../../../../routes/types'
import StatusIcon from '../../../StatusIcon'

import {
  ItemContainer,
  ItemRow,
  TitleRow,
  ItemTitle,
  ItemStatus,
  ItemDescription,
  ItemDateTime,
} from './styles'

const TaskItem = ({
  tasks,
  last,
}: {
  navigation?: TaskScreenNavigationProp
  tasks: TasksResponseProps
  last: boolean
}) => {
  const navigation = useNavigation()
  return (
    <ItemContainer
      last={last}
      onPress={() =>
        navigation.navigate('Task', {
          task: { id: tasks.id, title: tasks.title },
        })
      }>
      <ItemRow>
        <StatusIcon status={tasks.status} />
        <View>
          <TitleRow>
            <ItemTitle>{tasks.title}</ItemTitle>
          </TitleRow>
          <ItemStatus>({tasks.status})</ItemStatus>
          {tasks.description.length > 180 ? (
            <ItemDescription>
              {tasks.description.substring(0, 175)}...
            </ItemDescription>
          ) : (
            <ItemDescription>{tasks.description}</ItemDescription>
          )}
        </View>
        <ItemDateTime>
          {format(new Date(tasks.dueDateTime), 'HH:mm')}
        </ItemDateTime>
      </ItemRow>
    </ItemContainer>
  )
}

const enhance = withObservables(['tasks'], ({ tasks }) => {
  return {
    tasks,
  }
})

export default enhance(TaskItem)
