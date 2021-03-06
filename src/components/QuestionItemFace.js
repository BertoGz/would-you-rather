import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'



class QuestionItemFace extends Component{

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
				<button className='buttonNormal' onClick={this.toVotePage}>Poll</button>
			</div>
		)
	}
}





export default withRouter(QuestionItemFace)