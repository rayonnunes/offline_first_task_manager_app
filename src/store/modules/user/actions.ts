import { action } from 'typesafe-actions'

export const getUserLoading = () => {
  return action('@user/GET_USER_LOADING')
}

export const getUserSuccess = () => {
  return action('@user/GET_USER_SUCCESS')
}

export const getUserFailed = () => {
  return action('@user/GET_USER_FAILED')
}

export const getUser = () => {
  return action('@user/GET_USER')
}
