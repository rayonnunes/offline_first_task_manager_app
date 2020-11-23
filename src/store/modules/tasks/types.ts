import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export interface TasksResponseProps {
  id: number
  objective: string
  status: string
  dueDateTime: string
}

export interface TasksState {
  tasksData: TasksResponseProps[]
  loading: boolean
  status: string
  message: string | null
}

export type TasksAction = ActionType<typeof actions>
