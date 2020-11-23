import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export interface UserResponseProps {
  readonly id: number
  readonly name: string
  readonly lastName: string
}

export interface UserState {
  readonly userData: UserResponseProps
  readonly loading: boolean
  readonly status: string
  readonly message: string | null
}

export type UserAction = ActionType<typeof actions>
