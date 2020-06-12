import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import {formatQuestion} from '../utils/helpers'

import QuestionItem_Face from './QuestionItem_Face'
import QuestionItem_Details from './QuestionItem_Details'
import { Link, withRouter } from 'react-router-dom'

class QuestionItem extends Component{






	render(){
		
			const {id, question } = this.props
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

					<img src={avatar} alt={`Avatar of ${name}`}
					className='avatar'/>
					

					{/*reads router address and renders correct component.*/}

						<Route exact path='/'>
					    	<QuestionItem_Face questionText={optionOne.text} id={id}/>
					     </Route>
					    <Route path='/poll/:id'>
					    	<QuestionItem_Details question={question} />
					     </Route>
				</div>

			</div>
		)
	}
}

function mapStateToProps({authedUser,users,questions}, {id}){ //id is a prop passed from question list

	const question = questions[id]

	return{
		id,
		question: question ? formatQuestion(question,users[question.author],authedUser) : null 
		// if question is a thing return a formated question, otherwise null

	}
}
export default withRouter(connect(mapStateToProps)(QuestionItem))