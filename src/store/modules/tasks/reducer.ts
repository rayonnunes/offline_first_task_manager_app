import { TasksAction, TasksState } from './types'

const initialState: TasksState = {
  tasksData: [
    {
      id: 1,
      objective: 'Defeat the Dragon',
      status: 'scheduled',
      dueDateTime: '2020-11-22T18:55:24-03:00',
    },
  ],
  loading: false,
  status: '',
  message: '',
}

const user = (state = initialState, action: TasksAction): TasksState => {
  switch (action.type) {
    case '@tasks/GET_TASKS':
      return state
    case '@tasks/GET_TASKS_LOADING':
      return state
    case '@tasks/GET_TASKS_SUCCESS':
      return state
    case '@tasks/GET_TASKS_FAILED':
      return state
    default:
      return state
  }
}

export default user
