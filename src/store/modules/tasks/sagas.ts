import { takeLatest, put, all } from 'redux-saga/effects'
import * as actions from './actions'

export function* getTasks() {
  yield put(actions.getTasksLoading())
  try {
    yield put(actions.getTasksSuccess())
  } catch (error) {
    yield put(actions.getTasksFailed())
  }
}

export default all([takeLatest('@tasks/GET_TASKS', getTasks)])
