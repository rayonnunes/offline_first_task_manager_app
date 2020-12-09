import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export interface TasksResponseProps {
  id: number
  title: string
  description: string
  status: 'scheduled' | 'started' | 'finished' | 'overdue' | 'unaccomplished'
  dueDateTime: string
}

export interface TasksState {
  tasksData: TasksResponseProps[]
  loading: boolean
  status: string
  message: string | null
}

export type TasksAction = ActionType<typeof actions>
