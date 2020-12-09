import React from 'react'
import withObservables from '@nozbe/with-observables'
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider'
import { TaskScreenNavigationProp } from '../../routes/types'

import TaskDetail from '../components/TaskDetail'

const Task = ({
  route,
  tasks,
}: {
  route: TaskScreenNavigationProp
  tasks: any
}) => {
  const { task } = route.params
  return (
    <TaskDetail tasks={tasks}/>
  )
}

const enhance = withObservables(['tasks'], ({ database, route }: any) => {
  const taskId = route.params.task.id
  return {
    tasks: database.collections.get('tasks').find(taskId),
  }
})
export default withDatabase(enhance(Task))
