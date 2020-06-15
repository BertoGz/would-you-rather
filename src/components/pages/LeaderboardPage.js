import React,{Component} from 'react'
import {connect} from 'react-redux'
import LeaderboardItem from '../LeaderboardItem'
class LeaderboardPage extends Component{

	render(){
		return(
			<div>
				<ul>
				{
					this.props.userss.map((user)=>
						(<li>
							<LeaderboardItem user={user}/>
						</li>
						)
					)
				}
				</ul>
			</div>
		)
	}
}


function mapStateToProps({users}){
	console.log(users)
	const u = Object.values(users)

	u.sort((a,b)=>{
		return (Object.values(a.answers).length+a.questions.length >
		 Object.values(b.answers).length+b.questions.length  ) ? -1 : 1
	})
	return{
		userss: u//Object.values(users).map( (user)=>(user=>score)>(highest=>score) ? highest = user,  :    )
	}
}

export default connect(mapStateToProps)(LeaderboardPage)