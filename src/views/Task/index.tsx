import React from 'react'
import { ScrollView } from 'react-native'
import withObservables from '@nozbe/with-observables'
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider'
import { TaskScreenNavigationProp } from '../../routes/types'
import { TasksResponseProps } from '../../store/modules/tasks/types'

import TaskDetail from '../components/TaskDetail'

const Task = ({ tasks }: { tasks: TasksResponseProps }) => {
  return (
    <ScrollView>
      <TaskDetail tasks={tasks} />
    </ScrollView>
  )
}

const enhance = withObservables(
  ['database', 'route'],
  ({ database, route }: { database: any; route: TaskScreenNavigationProp }) => {
    const taskId = route.params.task.id
    return {
      tasks: database.collections.get('tasks').find(taskId),
    }
  },
)
export default withDatabase(enhance(Task))
