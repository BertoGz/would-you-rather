
import React, {Component} from 'react'
import PollUnanswered from './PollUnanswered'
import PollResult from './PollResult'
import {connect} from 'react-redux'
class QuestionItem_Details extends Component{




  // we want to know if q has been answered.
  // filter through users.answers[]  and if question.id == 
  render(){


  const hasReplied = Object.keys(this.props.user.answers).filter(i=>i===this.props.question.id).length===1 ? true : false
  console.log(hasReplied)
		return(
      <div className='question-poll'>
        { hasReplied ? 
        <PollResult id={this.props.question.id}/> : 
        <PollUnanswered question={this.props.question}/>
        }
      </div>
		)
	}
}

function mapStateToProps({authedUser,users,questions}){
    const user = Object.values(users).filter(u=>(u.id===authedUser))[0]
    //console.log(user.answers)
    //console.log(questions)

  return{
    user,
    authedUser,
  }
}

export default connect(mapStateToProps)(QuestionItem_Details)