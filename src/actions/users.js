

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_VOTE ='VOTE_USER'
export function receiveUsersAction(users){
	return{
		type: RECEIVE_USERS,
		users
	}

}