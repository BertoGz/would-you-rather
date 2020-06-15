import React,{Component} from 'react'
import {connect} from 'react-redux'
import ProgressBar from 'react-bootstrap/ProgressBar'

class PollResult extends Component{


	render(){
		const {authedUser} = this.props;

		// grabs the votes of option one and two
		const optionOneVotes = this.props.question.optionOne.votes
		const optionTwoVotes = this.props.question.optionTwo.votes
		
		//total amount of people who voted
		const allVotesLength = optionOneVotes.length+optionTwoVotes.length;
		

		// returns the percent of votes.
		const optionOneResult = Math.round( optionOneVotes.length / allVotesLength  * 100)
		const optionTwoResult = Math.round( optionTwoVotes.length / allVotesLength  * 100)

		// if my vote is found in option A , choose item A, else look through B, if its found choose B
		//else choose None
		const myVote = ( optionOneVotes.filter(vote=>vote===authedUser).length===1) ? 1 : 
		( optionTwoVotes.filter(vote=>vote===authedUser).length===1) ? 2 : 0





		return(
			<div className='container2'>
				<h2>Results:</h2>

					{myVote===1 && <p className='your-vote'>YOUR VOTE</p> }
				<div className={`${myVote===1?'poll-result colored':'poll-result'}`}>

					<p className='fit-text'>would you rather {this.props.question.optionOne.text}</p>
					<ProgressBar now={optionOneResult} label={`${optionOneResult}%`} />
					<p className='poll-result-votes'>{optionOneVotes.length} out of {allVotesLength}</p>
				</div>

						{myVote===2 && <p className='your-vote' >YOUR VOTE</p> }
				<div className={`${myVote===2?'poll-result colored':'poll-result'}`}>

					<p className='fit-text'>would you rather {this.props.question.optionTwo.text}</p>
					<ProgressBar now={optionTwoResult} label={`${optionTwoResult}%`} />
					<p className='poll-result-votes'> {optionTwoVotes.length} out of {allVotesLength}</p>
				</div>
			</div>
		)
	}
}

function mapStateToProps({questions,users,authedUser},{id}){
	const question = questions[id]
	return{
		question: question,
		users,
		authedUser,
	}
}
export default connect(mapStateToProps)(PollResult)

