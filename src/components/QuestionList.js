import React, {Component} from 'react'
import {connect} from 'react-redux'
class QuestionList extends Component{
	render(){
		return(
			<div>
				<h3 className='center'>Questions</h3>
				<ul className=''>
					{this.props.questionIds.map((id)=>(
						<li key={id}>
							<div>Question ID: {id}</div>
						</li>
					))}
				</ul>
			</div>
		)
	}
}

function mapStateToProps({questions}){
	return{
		questionIds: Object.keys(questions) ,
	}
}

export default connect(mapStateToProps)(QuestionList)