import React,{Component} from 'react'

class LeaderboardItem extends Component{
	render(){

		const {avatarURL,name,answers,questions} = this.props.user
		return(
			<div className='leaderboard-item-container'>
				<div className='leaderboard-lower'> 
					<img src={avatarURL} alt={`Avatar of ${name}`}
					className='avatar'/>
					
					<div className='leaderboard-middle'>
						<h4 style={{fontWeight: "bold"}}> {name}</h4>
						<p>Answered Questions...{Object.values(answers).length}</p>
						<p>Created Questions...{questions.length}</p>
					</div>

					<div className='leaderboard-right'>
						<h6 style={{fontWeight: "bold"}}>Score</h6>
						<h3 className='score'>{Object.values(answers).length + questions.length }</h3>
					</div>
				</div>
			</div>
		)
	}
}



export default LeaderboardItem