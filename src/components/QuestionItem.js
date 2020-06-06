import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import {formatQuestion} from '../utils/helpers'

import QuestionPoll from './QuestionPoll'
import QuestionPollUnanswered from './QuestionPollUnanswered'


const SHOW_POLL_FACE = '/'
const SHOW_POLL_UNANSWERED ='SHOW_POLL_UNANSWERED'
const NULL = 'NULL'

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
					
					<Router>
						<Route exact path='/'>
					    	<QuestionPoll questionText={question.optionOne.text}/>
					     </Route>
					    <Route exact path='/poll'>
					    	<QuestionPollUnanswered question={question}/>
					     </Route>
				    </Router>

				</div>

			</div>
		)
	}
}

function mapStateToProps({authedUser,users,questions,page}, {id}){ //id is a prop passed from question list
	const question = questions[id]


	return{
		authedUser,
		question: question? formatQuestion(question,users[question.author],authedUser) : null 
		// if question is a thing return a formated question, otherwise null

	}
}
export default connect(mapStateToProps)(QuestionItem)