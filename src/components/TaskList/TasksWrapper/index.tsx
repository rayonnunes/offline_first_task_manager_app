import React from 'react'
import TaskItem from './TaskItem'
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider'
import withObservables from '@nozbe/with-observables'
import { Q } from '@nozbe/watermelondb'
import Header from './Header'
import TaskEmpty from './TaskEmpty'
import { TasksResponseProps } from '../../../store/modules/tasks/types'

const TasksWrapper = ({
  tasks,
  title,
}: {
  tasks: TasksResponseProps[]
  title: string
}) => {
  console.log(tasks)

  return (
    <>
      <Header>{title}</Header>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <TaskItem
            key={task.id}
            task={task}
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
  const today: [number, number, number] = [
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
  ]
  const todayTime = new Date(...today).getTime()
  const tomorrow: [number, number, number] = [
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 1,
  ]
  const tomorrowTime = new Date(...tomorrow).getTime()
  return {
    tasks: database.collections
      .get('tasks')
      .query(Q.where('due_date_time', Q.between(todayTime, tomorrowTime))),
  }
})

export default withDatabase(enhance(TasksWrapper))
