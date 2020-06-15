import React,{Component} from 'react'
import {connect} from 'react-redux'
import LeaderboardItem from '../LeaderboardItem'
class LeaderboardPage extends Component{

	render(){
		return(
			<div>
				<ul>
				{
					Object.values(this.props.users).map((user)=>
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
	return{
		users,
	}
}

export default connect(mapStateToProps)(LeaderboardPage)