import React, {Component} from 'react'
import { connect } from 'react-redux'
import {formatQuestion} from '../utils/helpers'

import QuestionPoll from './QuestionPoll'
import QuestionPollUnanswered from './QuestionPollUnanswered'

class QuestionItem extends Component{




	render(){
		const {question} = this.props
		console.log(this.props)
		return(
			<div className='question-item-container'>

				<div className='question-item-upper'>
					{question.name} asks
				</div>

				<div className='question-lower'> 
					<img src={question.avatar} alt={`Avatar of ${this.props.name}`}
					className='avatar'/>
					
					{/*<QuestionPoll questionText={question.optionOne.text}/>)*/}
					<QuestionPollUnanswered question={question}/>
				</div>

			</div>
		)
	}
}

function mapStateToProps({authedUser,users,questions}, {id}){ //id is a prop passed from question list
	const question = questions[id]


	return{
		authedUser,
		question: question? formatQuestion(question,users[question.author],authedUser) : null 
		// if question is a thing return a formated question, otherwise null

	}
}
export default connect(mapStateToProps)(QuestionItem)