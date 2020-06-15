import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import { Redirect } from 'react-router-dom'


class QuestionItem_Face extends Component{

state={

}
	toVotePage = (e)=>{
		e.preventDefault();
		this.props.history.push(`/poll/${this.props.id}`)
	}
	render(){
		  

		return(
			<div className='question-poll'> 
				<h3>Would you rather</h3> 
					<hr/> 
				<h4>...{this.props.questionText}...</h4>
				<button onClick={this.toVotePage}>Poll</button>
			</div>
		)
	}
}





export default withRouter(QuestionItem_Face)