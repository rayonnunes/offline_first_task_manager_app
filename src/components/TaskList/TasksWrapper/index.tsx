import React from 'react'
import TaskItem from './TaskItem'

import { TasksResponseProps } from '../../../store/modules/tasks/types'

const TasksWrapper = ({ tasks }: { tasks: TasksResponseProps[] }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <TaskItem key={task.id} task={task} last={index === tasks.length - 1} />
      ))}
    </>
  )
}

export default TasksWrapper
