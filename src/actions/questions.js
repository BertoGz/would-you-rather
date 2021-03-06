import {saveQuestionAnswer} from '../utils/api'
import {saveQuestion} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const VOTE_QUESTION = 'VOTE_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'


export function receiveQuestionsAction(questions){
	return{
		type: RECEIVE_QUESTIONS,
		questions
	}
}

///////////////////////////////////////////////
function voteQuestionAction(authedUser,qid,answer){
	return{
		type: VOTE_QUESTION,
		authedUser,
		qid,
		answer
	}
}

export function handleVoteQuestionAction(vote){
	return (dispatch)=>{
		const {authedUser,qid,answer} = vote

		dispatch(showLoading())
		
		return saveQuestionAnswer({
			authedUser,
			qid,
			answer
		}).then((question)=>dispatch(voteQuestionAction(authedUser,qid,answer))).then(()=>dispatch(hideLoading()))
	}
}

////////////////////////////////////////////

function addQuestionAction(question){
	return{
		type: ADD_QUESTION,
		question
	}
}
export function handleAddQuestionAction(optionOneText,optionTwoText,author){
	
			

	return(dispatch)=>{
		
		dispatch(showLoading())

		return saveQuestion({
			optionOneText,
			optionTwoText,
			author
		}
		).then((question)=>dispatch(addQuestionAction(question)   )).then(()=>dispatch(hideLoading()))
	}
}