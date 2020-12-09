import React from 'react'
import StatusIcon from '../../StatusIcon'
import { HeaderWrapper, HeaderRow, HeaderText, HeaderStatus } from './styles'

const Header = ({
  status,
  title,
}: {
  status: 'scheduled' | 'started' | 'finished' | 'overdue'
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
