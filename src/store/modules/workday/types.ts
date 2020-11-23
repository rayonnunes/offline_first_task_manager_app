import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

interface ScheduleProps {
  status: string
  startDate: Date | string | null
}
export interface WorkdayProps {
  checkIn: ScheduleProps
  checkOut: ScheduleProps
  loading: boolean
  status: string
  message: string
}

export type WorkdayAction = ActionType<typeof actions>
