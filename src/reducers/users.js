import  {RECEIVE_USERS} from '../actions/users'

export default function users(state={},action){
	switch(action.type){
		case RECEIVE_USERS:
			return{
			...state,
			...actions.users
			}

		default: return state
	}

}