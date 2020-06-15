import React,{Component} from 'react'

class LeaderboardItem extends Component{
	render(){
		return(
			<div>leaderBoardItem {this.props.user.id}</div>
		)
	}
}



export default LeaderboardItem