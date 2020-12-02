import React, { useState, useEffect } from 'react'
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider'
import withObservables from '@nozbe/with-observables'
import { Q } from '@nozbe/watermelondb'
import numberDateTime from '../../../utils/numberDateTime'
import Container from './Container'
import Header from './TasksWrapper/Header'
import TasksWrapper from './TasksWrapper'
import BlockWall from './BlockWall'

const Task = { Container, Header, TasksWrapper, BlockWall }

const TaskList = ({ checkIn, checkOut }) => {
  const [showBlockWall, setShowBlockWall] = useState(true)
  const [warnMessage, setWarnMessage] = useState('')
  useEffect(() => {
    if (checkIn.length > 0) {
      setShowBlockWall(false)
      setWarnMessage('')
    } else {
      setShowBlockWall(true)
      setWarnMessage("Press 'Check-in' to start your activities")
    }
    if (checkOut.length > 0) {
      setShowBlockWall(true)
      setWarnMessage('Nice work today, rest well and come back tomorrow')
    }
  }, [checkIn, checkOut])
  return (
    <Task.Container>
      <Task.TasksWrapper title="Today" />
      <Task.BlockWall show={showBlockWall} message={warnMessage} />
    </Task.Container>
  )
}

const enhance = withObservables(
  ['user', 'check_in', 'check_out'],
  ({ database }: any) => {
    const { today, tomorrow } = numberDateTime
    return {
      checkIn: database.collections
        .get('check_in')
        .query(Q.where('created_at', Q.between(today, tomorrow))),
      checkOut: database.collections
        .get('check_out')
        .query(Q.where('created_at', Q.between(today, tomorrow))),
    }
  },
)

export default withDatabase(enhance(TaskList))
