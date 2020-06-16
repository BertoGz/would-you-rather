import React,{Component} from 'react'
import {connect} from 'react-redux'
import LeaderboardItem from '../LeaderboardItem'
import Login from '../Login'
class LeaderboardPage extends Component{

	render(){
		return(
			<div>
			{
				this.props.loggedOff ? <Login/> :
				<ul>
				{
					this.props.userss.map((user)=>
						(<li key={user.id}>
							<LeaderboardItem key={user.id} user={user}/>
						</li>
						)
					)
				}
				</ul>
			}
			</div>
		)
	}
}


function mapStateToProps({authedUser,users}){
	console.log(users)
	const u = Object.values(users)

	u.sort((a,b)=>{
		return (Object.values(a.answers).length+a.questions.length >
		 Object.values(b.answers).length+b.questions.length  ) ? -1 : 1
	})
	return{
		loggedOff: authedUser === null,
		userss: u//Object.values(users).map( (user)=>(user=>score)>(highest=>score) ? highest = user,  :    )
	}
}

export default connect(mapStateToProps)(LeaderboardPage)