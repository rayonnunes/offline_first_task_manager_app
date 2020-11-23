import { takeLatest, put, all } from 'redux-saga/effects'
// import { takeLatest, call, put, all } from 'redux-saga/effects'
// import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

// export function* getUser(action: ActionType<typeof actions.getUser>) {
export function* getUser() {
  yield put(actions.getUserLoading())
  // try {
  //   const { payload } = action
  //   console.log('SAGA PAYLOAD: ',payload);
  //   const { data } = yield call(
  //     api.post,
  //     `usuarios/autenticacao/`,
  //     payload
  //   )
  //   console.log(data);
  //   yield put(actions.signInSuccess(data))
  // } catch (error) {
  //   const errorMessage = error?.response?.data?.message || 'Falha inesperada ao Realizar Login'
  //   yield put(actions.signInError(errorMessage))
  // }
  try {
    yield put(actions.getUserSuccess())
  } catch (error) {
    yield put(actions.getUserFailed())
  }
}

export default all([takeLatest('@user/GET_USER', getUser)])
