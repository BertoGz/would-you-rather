import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuestionItem from './QuestionItem'
class QuestionList extends Component{
	render(){
		return(
			<div>
				<h3 className='center'>Questions</h3>
				<ul className=''>
					{this.props.questionIds.map((id)=>(
						<li key={id}>
		
							<QuestionItem id={id}/>
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