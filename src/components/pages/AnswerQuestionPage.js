import React,{Component} from 'react'
import QuestionItem from '../QuestionItem'
import {connect} from 'react-redux'
class AnswerQuestionPage extends Component{
	render(){


	return(

		<div>
			{
				this.props.loggedOff ? <h3 className='login-alert'>Please Login to Vote</h3> :

				<div className='question-list-container'>
					<div className='question-tab'>	
						<QuestionItem id={this.props.id}/>
					</div>
				</div>
			}
		</div>
		)
	}
}

function mapStateToProps({authedUser,questions},props){
	const {id} = props.match.params
	
	return{
		loggedOff: authedUser === null,
		id: props.match.params ? id : null
	}

}


export default connect(mapStateToProps)(AnswerQuestionPage)