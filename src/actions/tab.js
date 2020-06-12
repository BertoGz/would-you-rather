export const SET_TAB = 'SET_TAB'

export function setTabAction(tab){
	return{
		type: SET_TAB,
		tab,
	}
}


export const RECEIVE_TAB = 'RECEIVE_TAB'

export function receiveTabAction(tab){
	return{
		type: RECEIVE_TAB,
		tab,
	}
}

