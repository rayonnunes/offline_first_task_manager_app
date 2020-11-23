import { applyMiddleware, createStore, Middleware, Reducer } from 'redux'
import { TasksAction, TasksState } from './modules/tasks/types'
import { UserAction, UserState } from './modules/user/types'
import { WorkdayAction, WorkdayProps } from './modules/workday/types'

export interface StoreState {
  tasks: TasksState
  user: UserState
  workday: WorkdayProps
}

export type StoreAction = TasksAction | UserAction | WorkdayAction

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[],
) => {
  const enhancer = applyMiddleware(...middlewares)
  return createStore(reducers, enhancer)
}
