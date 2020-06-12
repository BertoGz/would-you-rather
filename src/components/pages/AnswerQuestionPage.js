import React,{Component} from 'react'
import QuestionItem from '../QuestionItem'
import {connect} from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class AnswerQuestionPage extends Component{
	render(){


	return(
		<div>
			<div className='question-list-container'>
				<div className='question-tab'>	
					<QuestionItem id={this.props.id}/>
				</div>
			</div>
		</div>
		)
	}
}

function mapStateToProps({questions},props){
	const {id} = props.match.params
	const question = questions[id]
	
	return{
		id: props.match.params ? id : null
	}

}

export default connect(mapStateToProps)(AnswerQuestionPage)