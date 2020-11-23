import { all } from 'redux-saga/effects'
// import tasks from './tasks/sagas'
import user from './user/sagas'
// import workday from './workday/sagas'

export default function* rootSaga() {
  return yield all([user])
}
