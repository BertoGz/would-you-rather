export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function receiveQuestionsAction(questions){
	return{
		type: RECEIVE_QUESTIONS,
		questions
	}
}