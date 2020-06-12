import {combineReducers } from 'redux'

import authedUser from './authedUser'
import users from './users'
import questions from './questions'
import tab from './tab'

import { loadingBarReducer } from 'react-redux-loading'


export default combineReducers({
	authedUser,
	users,
	questions,
	tab,
	loadingBar: loadingBarReducer,
})