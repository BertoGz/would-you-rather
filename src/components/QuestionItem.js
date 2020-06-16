import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'
import {formatQuestion} from '../utils/helpers'

import QuestionItemFace from './QuestionItemFace'
import QuestionItemDetails from './QuestionItemDetails'
import {withRouter } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
class QuestionItem extends Component{






	render(){
		
			const {id, question } = this.props
    		

    		 if (question=== null) {
      				return <ErrorPage/>
    			}

    			const {name, avatar, optionOne} = question

		return(


			
			
			<div className='question-item-container'>

				{/*reads router address and displays correct text*/}
				<div className='question-item-upper' style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>

						<Route exact path='/'>
							{name} asks:
						</Route>
						<Route path='/poll/:id'>
							Asked by {name}: 
						</Route>

						
				</div>


				<div className='question-lower'> 

					<img src={avatar} alt={`Avatar of ${name}`}
					className='avatar'/>
					

					{/*reads router address and renders correct component.*/}

						<Route exact path='/'>
					    	<QuestionItemFace questionText={optionOne.text} id={id}/>
					     </Route>
					    <Route path='/poll/:id'>
					    	<QuestionItemDetails question={question} />
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
		question: question ? formatQuestion(question,users[question.author],authedUser) : null ,


		// if question is a thing return a formated question, otherwise null

	}
}
export default withRouter(connect(mapStateToProps)(QuestionItem))