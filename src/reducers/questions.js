import  {RECEIVE_QUESTIONS,VOTE_QUESTION} from '../actions/questions'

export default function questions(state={},action){
	switch(action.type){
		case RECEIVE_QUESTIONS:
			return{
				...state,
				...action.questions
			}

		case VOTE_QUESTION:
			const {question} = action

			return{
				...state,
				[action.question.id]: {
					...state[action.question.id],
						[action.answer]:{
							...state[action.question.id][action.answer],
							votes: state[action.question.id][action.answer].votes.concat(action.authedUser)
							
						},
					
				
				},
				/// to do
			}
		default: return state
	}

}