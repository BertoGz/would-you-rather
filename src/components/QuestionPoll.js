import React, {Component} from 'react'
import { connect } from 'react-redux'




class QuestionPoll extends Component{
	render(){
		return(
			<div className='question-poll'> 
				<h3>Would you rather</h3> 
					<hr/> 
				<h4>...{this.props.questionText}...</h4>
				<button>Poll</button>
			</div>
		)
	}
}

function mapStateToProps({}){


	return {

	}
}

export default connect( mapStateToProps )(QuestionPoll)