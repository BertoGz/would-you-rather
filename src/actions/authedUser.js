export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUserAction(id){
	return{
		type: SET_AUTHED_USER,
		id,
	}
}


export function handleSetAuthedUser(id){
	return (dispatch)=>{
		dispatch(setAuthedUserAction(id))
	}
}