import React from 'react'
import StatusIcon from '../../StatusIcon'
import { TasksResponseProps } from '../../../../store/modules/tasks/types'
import { HeaderWrapper, HeaderRow, HeaderText, HeaderStatus } from './styles'

const Header = ({
  status,
  title,
}: {
  status: TasksResponseProps['status']
  title: string
}) => {
  return (
    <HeaderWrapper>
      <HeaderRow>
        <StatusIcon status={status} />
        <HeaderText>{title}</HeaderText>
      </HeaderRow>
      <HeaderStatus>({status})</HeaderStatus>
    </HeaderWrapper>
  )
}

export default Header
