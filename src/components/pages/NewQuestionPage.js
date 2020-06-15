import React,{Component} from 'react'
import {connect} from 'react-redux'
import Form from 'react-bootstrap/Form'
import {handleAddQuestionAction} from '../../actions/questions'
import {withRouter} from 'react-router-dom'
import {setTabAction} from '../../actions/tab'
class NewQuestionPage extends Component{

	constructor(props) {
		super(props);
		this.state = {
			questionOne: "",
			questionTwo: ""
		}

		this.handleChangeOptionOne = this.handleChangeOptionOne.bind(this);
		this.handleChangeOptionTwo = this.handleChangeOptionTwo.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
	}

	handleChangeOptionOne(event) {
		this.setState({questionOne: event.target.value});
	}
	handleChangeOptionTwo(event) {
		this.setState({questionTwo: event.target.value});
	}

	handleSubmit(event) {
	    event.preventDefault();
	    if (this.state.questionOne==="" || this.state.questionTwo===""){
	    	return alert('Please complete the form')
	    }
	    const {dispatch} = this.props

	    let optionOneText = this.state.questionOne
	    let optionTwoText = this.state.questionTwo
	   	let author = this.props.authedUser
	    dispatch(setTabAction('Unanswered'))
	    dispatch(handleAddQuestionAction(optionOneText,optionTwoText,author)).then(
	    	this.props.history.push(`/`)
	    )

	    
  	}



	render(){
		return(
			<div>
				{ this.props.loggedOff ? <h3 className='login-alert'>Please Login First</h3> :
					<div className='question-item-container'>

						<div className='question-item-upper'>
							<h3>Create New Question:</h3>
						</div>

						<div className='new-question-lower'> 
							<p>Complete the question</p>
							<h3>Would you rather...</h3>
							<br/>

							<Form onSubmit={this.handleSubmit}> 
							  <Form.Group controlId="formOne" >
							    <Form.Control type="text" placeholder="Enter Option One Text Here" 
							    value={this.state.optionOne}
		                        onChange={this.handleChangeOptionOne}/>
							  </Form.Group>
							  	<h6>Or</h6>
							  <Form.Group controlId="formTwo">
							    <Form.Control type="text" placeholder="Enter Option Two Text Here" 
							   	value={this.state.optionTwo}
		                        onChange={this.handleChangeOptionTwo}/>
		             
							  </Form.Group>
							  <button className='buttonNormal' variant="primary" type="submit">
							    Submit
							  </button>
							</Form>
						</div>
					</div>
				}
			</div>
		)
	}
}

function mapStateToProps({authedUser}){
	return{
		authedUser,
		loggedOff: authedUser === null,
	}
}
export default withRouter(connect(mapStateToProps)(NewQuestionPage))