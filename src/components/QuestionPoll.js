import React, {Component} from 'react'





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



export default (QuestionPoll)