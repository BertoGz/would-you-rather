import React,{Component} from 'react'
import QuestionItem from './QuestionItem'
import {connect} from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class AnswerQuestionPage extends Component{
	render(){


		return(
			<div>
	
			<QuestionItem id={this.props.id}/>
			
			</div>
		)
	}
}

function mapStateToProps({questions},props){
	const {id} = props.match.params
	console.log('1',id)
	const question = questions[id]
	
	return{
		id: props.match.params ? id : null
	}

}

export default connect(mapStateToProps)(AnswerQuestionPage)