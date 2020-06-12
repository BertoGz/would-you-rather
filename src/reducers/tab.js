import {SET_TAB,RECEIVE_TAB} from '../actions/tab'

export default function tab(state=null,action){
	switch(action.type){
		case SET_TAB:
			return action.tab

		case RECEIVE_TAB:
			return {
				...state,tab:action.tab
			}
		default: return state
	}
}