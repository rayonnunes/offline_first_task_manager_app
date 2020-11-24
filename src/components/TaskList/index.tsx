import React from 'react'
import { useSelector } from 'react-redux'
import { StoreState } from '../../store/createStore'

import Container from './Container'
import Header from './Header'
import TasksWrapper from './TasksWrapper'

const Task = { Container, Header, TasksWrapper }

const TaskList = () => {
  const { tasks } = useSelector((state: StoreState) => state)
  const { tasksData } = tasks
  return (
    <Task.Container>
      <Task.Header>Today</Task.Header>
      <Task.TasksWrapper tasks={tasks.tasksData} />
    </Task.Container>
  )
}

export default TaskList
