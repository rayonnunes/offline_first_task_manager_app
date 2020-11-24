import React from 'react'
import { View } from 'react-native'
import format from 'date-fns/format'
import { TasksResponseProps } from '../../../../store/modules/tasks/types'
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
  task,
  last,
}: {
  task: TasksResponseProps
  last: boolean
}) => (
  <ItemContainer last={last}>
    <ItemRow>
      <StatusIcon status={task.status} />
      <View>
        <TitleRow>
          <ItemTitle>{task.title}</ItemTitle>
        </TitleRow>
        <ItemStatus>({task.status})</ItemStatus>
        {task.description.length > 180 ? (
          <ItemDescription>
            {task.description.substring(0, 176)}...
          </ItemDescription>
        ) : (
          <ItemDescription>{task.description}</ItemDescription>
        )}
      </View>
      <ItemDateTime>{format(new Date(task.dueDateTime), 'HH:mm')}</ItemDateTime>
    </ItemRow>
  </ItemContainer>
)

export default TaskItem
