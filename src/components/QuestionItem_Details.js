
import React, {Component} from 'react'
import PollUnanswered from './PollUnanswered'
import PollResult from './PollResult'
class QuestionItem_Details extends Component{








  render(){


		return(
      <div>
        <PollUnanswered question={this.props.question}/>
        <PollResult id={this.props.question.id}/>
      </div>
		)
	}
}

function mapStateToProps({authedUser,users}){
  return{

  }
}

export default QuestionItem_Details