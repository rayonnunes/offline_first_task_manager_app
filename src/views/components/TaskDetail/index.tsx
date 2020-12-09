import React from 'react'
import withObservables from '@nozbe/with-observables'
import Container from './Container'
import Header from './Header'
import Body from './Body'
import { TasksResponseProps } from '../../../store/modules/tasks/types'

const Detail = { Container, Header, Body }

const TaskDetail = ({ tasks }: { tasks: TasksResponseProps }) => {
  const { status, title } = tasks

  return (
    <Detail.Container>
      <Detail.Header status={status} title={title} />
      <Detail.Body />
    </Detail.Container>
  )
}

const enhance = withObservables(
  ['tasks'],
  ({ tasks }: { tasks: TasksResponseProps }) => {
    return {
      tasks,
    }
  },
)

export default enhance(TaskDetail)
