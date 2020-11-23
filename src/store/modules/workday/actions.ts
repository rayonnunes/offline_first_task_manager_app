import { action } from 'typesafe-actions'

export const startWorkday = () => {
  return action('@workday/START_WORKDAY')
}

export const endWorkday = () => {
  return action('@workday/END_WORKDAY')
}

export const getWorkdayLoading = () => {
  return action('@workday/GET_WORKDAY_LOADING')
}

export const getWorkdaySuccess = () => {
  return action('@workday/GET_WORKDAY_SUCCESS')
}

export const getWorkdayFailed = () => {
  return action('@workday/GET_WORKDAY_FAILED')
}

const getWorkday = () => {
  return action('@workday/GET_WORKDAY')
}

export default getWorkday
