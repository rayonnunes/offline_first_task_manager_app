import React from 'react'

import Container from './Container'
import Header from './TasksWrapper/Header'
import TasksWrapper from './TasksWrapper'
import BlockWall from './BlockWall'

const Task = { Container, Header, TasksWrapper, BlockWall }

const TaskList = () => {
  return (
    <Task.Container>
      <Task.TasksWrapper title="Today" />
      <Task.BlockWall />
    </Task.Container>
  )
}

export default TaskList
