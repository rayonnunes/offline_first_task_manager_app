import { combineReducers } from 'redux'

import { StoreState } from '../createStore'

import tasks from './tasks/reducer'
import user from './user/reducer'
import workday from './workday/reducer'

export default combineReducers<StoreState>({ tasks, user, workday })
