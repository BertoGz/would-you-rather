import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import {formatQuestion} from '../utils/helpers'

import QuestionViewPoll from './QuestionViewPoll'
import QuestionPollUnanswered from './QuestionPollUnanswered'
import QuestionPollResult from './QuestionPollResult'
import { Link, withRouter } from 'react-router-dom'

class QuestionItem extends Component{






	render(){
		
		const {id, question } = this.props
	console.log('4',question)

		  if (question === null) {
      			return <p>This Tweet doesn't exist</p>
    		}

    		const {name, avatar, optionOne} = question

		return(



			<div className='question-item-container'>

				{/*reads router address and displays correct text*/}
				<div className='question-item-upper'>

						<Route exact path='/'>
							{name} asks:
						</Route>
						<Route path='/poll/:id'>
							{name} asks:
						</Route>

						<Route  path='/result/:id'>
							asked by {name}: 
						</Route>

				</div>


				<div className='question-lower'> 

					<img src={avatar} alt={`Avatar of ${this.props.name}`}
					className='avatar'/>
					

					{/*reads router address and renders correct component.*/}

						<Route exact path='/'>
					    	<QuestionViewPoll questionText={optionOne.text} id={id}/>
					     </Route>
					    <Route path='/poll/:id'>
					    	<QuestionPollUnanswered question={question} />
					     </Route>
					     <Route  path='/result/:id'>
					    	<QuestionPollResult id={id}/>
					     </Route>
		

				</div>

			</div>
		)
	}
}

function mapStateToProps({authedUser,users,questions}, {id}){ //id is a prop passed from question list

	console.log('2',id)
	const question = questions[id]
	console.log('3',question)

	return{
		id,
		question: question ? formatQuestion(question,users[question.author],authedUser) : null 
		// if question is a thing return a formated question, otherwise null

	}
}
export default withRouter(connect(mapStateToProps)(QuestionItem))