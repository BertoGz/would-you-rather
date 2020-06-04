import React, {Component} from 'react'
import { connect } from 'react-redux'
import {formatQuestion} from '../utils/helpers'
class QuestionItem extends Component{
	render(){
		console.log(this.props)
		return(
			<div className='question-item'>
				
			</div>
		)
	}
}

function mapStateToProps({authedUser,users,questions}, {id}){ //id is a prop passed from question list
	const question = questions[id]

	return{
		authedUser,
		question: formatQuestion(question,users[question.author],authedUser)
	}
}
export default connect(mapStateToProps)(QuestionItem)