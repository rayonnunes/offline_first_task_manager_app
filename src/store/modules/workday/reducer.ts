import { WorkdayAction, WorkdayProps } from './types'

const initialState: WorkdayProps = {
  checkIn: {
    status: 'not_started',
    startDate: null,
  },
  checkOut: {
    status: 'not_started',
    startDate: null,
  },
  loading: false,
  status: '',
  message: '',
}

const workday = (state = initialState, action: WorkdayAction): WorkdayProps => {
  switch (action.type) {
    case '@workday/GET_WORKDAY':
      return state
    case '@workday/GET_WORKDAY_LOADING':
      return {
        ...state,
        loading: true,
      }
    case '@workday/GET_WORKDAY_SUCCESS':
      return {
        ...state,
        loading: false,
        status: 'success',
      }
    case '@workday/GET_WORKDAY_FAILED':
      return {
        ...state,
        loading: false,
        status: 'failed',
      }
    case '@workday/START_WORKDAY':
      return {
        ...state,
        loading: false,
        checkIn: {
          status: 'started',
          startDate: new Date(),
        },
      }
    case '@workday/END_WORKDAY':
      return {
        ...state,
        loading: false,
        checkIn: {
          ...state.checkIn,
          status: 'finished',
        },
        checkOut: {
          status: 'finished',
          startDate: new Date(),
        },
      }
    default:
      return state
  }
}

export default workday
