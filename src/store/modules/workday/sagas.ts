import { takeLatest, put, all } from 'redux-saga/effects'
import * as actions from './actions'

export function* getWorkday() {
  yield put(actions.getWorkdayLoading())

  try {
    yield put(actions.getWorkdaySuccess())
  } catch (error) {
    yield put(actions.getWorkdayFailed())
  }
}

export function* startWorkday() {
  yield put(actions.startWorkday())
}

export function* endWorkday() {
  yield put(actions.endWorkday())
}

export default all([
  takeLatest('@workday/GET_WORKDAY', getWorkday),
  takeLatest('@workday/START_WORKDAY', startWorkday),
  takeLatest('@workday/END_WORKDAY', endWorkday),
])
