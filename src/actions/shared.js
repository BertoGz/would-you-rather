import {getInitialData} from '../utils/api'

//import action creators
import {receiveUsersAction} from '../actions/users'
import {receiveQuestionsAction} from '../actions/questions'
import {setAuthedUserAction} from '../actions/authedUser'

import {setTabAction} from '../actions/tab'

import {showLoading, hideLoading} from 'react-redux-loading' //we inported this after creating a loading 



export function handleInitialData (){
	return(dispatch)=>{
		dispatch(showLoading())
		return getInitialData().then(({users,questions})=>{
			dispatch(receiveUsersAction(users))
			dispatch(receiveQuestionsAction(questions))
			dispatch(setTabAction('Unanswered'))
			dispatch(hideLoading())
		})
	}
}