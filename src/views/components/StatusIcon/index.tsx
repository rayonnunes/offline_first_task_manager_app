import React from 'react'
import { Icon } from './styles'

import { TasksResponseProps } from '../../../store/modules/tasks/types'

const StatusIcon = ({ status }: { status: TasksResponseProps['status'] }) => {
  const renderIcon = (
    iconName: string,
    color: 'primary' | 'warning' | 'success' | 'danger',
  ) => <Icon name={iconName} color={color} size={22} />

  const acceptedStatus = {
    scheduled: renderIcon('calendar', 'primary'),
    started: renderIcon('clock', 'warning'),
    finished: renderIcon('check-circle', 'success'),
    overdue: renderIcon('alert-circle', 'danger'),
    unaccomplished: renderIcon('alert-circle', 'danger'),
  }

  return acceptedStatus[status]
}
export default StatusIcon
