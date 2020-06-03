import {SET_AUTHED_USER} form './actions/authedUser'

export default function authedUser(state=null, action){
	switch(action.type){
		case SET_AUTHED_USER:
			return{
				return action.id
			}
		default : 
			return state
	}
}