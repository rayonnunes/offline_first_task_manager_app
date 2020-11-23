import { action } from 'typesafe-actions'

export const getTasksLoading = () => {
  return action('@tasks/GET_TASKS_LOADING')
}

export const getTasksSuccess = () => {
  return action('@tasks/GET_TASKS_SUCCESS')
}

export const getTasksFailed = () => {
  return action('@tasks/GET_TASKS_FAILED')
}

export const getTasks = () => {
  return action('@tasks/GET_TASKS')
}
