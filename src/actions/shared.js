import {getInitialData} from '../utils/api'

//import action creators
import {receiveUsersAction} from './actions/users'
import {receiveQuestionsAction} from './actions/questions'
import {setAuthedUserAction} from './actions/authedUser'

const AUTHED_ID = 'tylermcginnis'
export function handleInitialData (){
	return(dispatch)=>{
		return getInitialData().then((users,questions)=>{
			dispatch(receiveUsersAction(users))
			dispatch(receiveQuestionsAction(questions))
			dispatch(setAuthedUserAction(AUTHED_ID))

		})
	}
}