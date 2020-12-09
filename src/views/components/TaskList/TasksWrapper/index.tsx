import React from 'react'
import TaskItem from './TaskItem'
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider'
import withObservables from '@nozbe/with-observables'
import { Q } from '@nozbe/watermelondb'
import numberDateTime from '../../../../utils/numberDateTime'
import { TasksResponseProps } from '../../../../store/modules/tasks/types'
import Header from './Header'
import TaskEmpty from './TaskEmpty'

const TasksWrapper = ({
  tasks,
  title,
}: {
  tasks: TasksResponseProps[]
  title: string
}) => {
  return (
    <>
      <Header>{title}</Header>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <TaskItem
            tasks={task}
            key={task.id}
            last={index === tasks.length - 1}
          />
        ))
      ) : (
        <TaskEmpty>{`No New Tasks for ${title}`}</TaskEmpty>
      )}
    </>
  )
}

const enhance = withObservables(['tasks'], ({ database }: any) => {
  const { today, tomorrow } = numberDateTime
  return {
    tasks: database.collections
      .get('tasks')
      .query(Q.where('due_date_time', Q.between(today, tomorrow)))
      .observe(),
  }
})

export default withDatabase(enhance(TasksWrapper))
