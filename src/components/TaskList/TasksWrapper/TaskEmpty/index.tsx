import React from 'react'
import { Container, EmptyMessage } from './styles'

const TaskEmpty = ({ children }: { children: string }) => {
  return (
    <Container>
      <EmptyMessage>- {children} -</EmptyMessage>
    </Container>
  )
}

export default TaskEmpty
