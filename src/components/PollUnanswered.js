import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import {handleVoteQuestionAction} from '../actions/questions'
import {connect} from 'react-redux'
import React, {Component} from 'react'



class PollUnanswered extends Component{
	
	 constructor(props) {
		super(props);
		this.state = {value: ""};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
	    event.preventDefault();
	    if (this.state.value===""){
	    	return alert('Please choose an option')
	    }
	    const {dispatch} = this.props

	    let myVote = {
	      authedUser: this.props.authedUser, 
	      qid: this.props.question.id, 
	      answer: this.state.value
	 
	    }
	    dispatch(handleVoteQuestionAction(myVote))

  	}


	render(){
		return(
			<div className='question-poll'> 
						<h3>Would you rather</h3> 
							<hr/> 
						
		        <div className='question-poll-options'>
		          <form onSubmit={this.handleSubmit} >
		            <fieldset>
		                <Form.Group value={this.state.value} onChange={this.handleChange}>

		                  <Col >
		                    <Form.Check
		                      type="radio"
		                      label={this.props.question.optionOne.text}
		                      name="formHorizontalRadios"
		                      id="formHorizontalRadios1"
		                      value="optionOne"
		                    />
		                    <Form.Check
		                      type="radio"
		                      label={this.props.question.optionTwo.text}
		                      name="formHorizontalRadios"
		                      id="formHorizontalRadios2"
		                      value="optionTwo"
		                    />
		                  </Col>


		                    <button type="submit">Submit</button> 
		                </Form.Group>
		              </fieldset>

		          </form>
		  		</div>
		    </div>


		)
	}
}

function mapStateToProps({authedUser}){ //id is a prop passed from question list
  return{
    authedUser,
  }
}



export default connect(mapStateToProps)(PollUnanswered)