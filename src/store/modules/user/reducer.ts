import { UserAction, UserState } from './types'
const initialState: UserState = {
  userData: {
    id: 1,
    name: 'John',
    lastName: 'Doe',
  },
  loading: false,
  status: '',
  message: '',
}

const user = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case '@user/GET_USER':
      return state
    case '@user/GET_USER_LOADING':
      return state
    case '@user/GET_USER_SUCCESS':
      return state
    case '@user/GET_USER_FAILED':
      return state
    default:
      return state
  }
}

export default user
