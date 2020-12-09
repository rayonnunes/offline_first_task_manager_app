import React from 'react'
import withObservables from '@nozbe/with-observables'
import Container from './Container'
import Header from './Header'

const Detail = { Container, Header }

const TaskDetail = ({ tasks }) => {
  const { status, title }: { status: string; title: string } = tasks

  return (
    <Detail.Container>
      <Detail.Header status={status} title={title} />
    </Detail.Container>
  )
}

const enhance = withObservables(['tasks'], ({ tasks }) => {
  return {
    tasks,
  }
})

export default enhance(TaskDetail)
