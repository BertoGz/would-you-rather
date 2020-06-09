import React,{Component} from 'react'
import {connect} from 'react-redux'
import ProgressBar from 'react-bootstrap/ProgressBar'

class QuestionPollResult extends Component{


	render(){
		const {users,authedUser} = this.props;

		const votesOptionOne = this.props.question.optionOne.votes.length 
		const votesOptionTwo = this.props.question.optionTwo.votes.length
		const totalVotes = votesOptionOne + votesOptionTwo

		const optionOneResult = Math.round( votesOptionOne / totalVotes * 100)
		const optionTwoResult = Math.round( votesOptionTwo / totalVotes * 100)

		const myVote = 0
		return(
			<div className='container2'>
				<h2>Results:</h2>
				<div className='poll-result'>

					<p>would you rather {this.props.question.optionOne.text}</p>
					<ProgressBar now={optionOneResult} label={`${optionOneResult}%`} />
					<p className='center'>{votesOptionOne} out of {totalVotes}</p>
				</div>

				<div className='poll-result'>
					<p>would you rather {this.props.question.optionTwo.text}</p>
					<ProgressBar now={optionTwoResult} label={`${optionTwoResult}%`} />
					<p className='center'> {votesOptionTwo} out of {totalVotes}</p>
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
export default connect(mapStateToProps)(QuestionPollResult)

