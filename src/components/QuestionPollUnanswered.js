import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import React, {Component} from 'react'
import {connect} from 'react-redux'


class QuestionPollUnanswered extends Component{
  constructor(props) {
    super(props);
    this.state = {value: "1"};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
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
                      value="1"
                    />
                    <Form.Check
                      type="radio"
                      label={this.props.question.optionTwo.text}
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                      value="2"
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

function mapStateToProps({}){

}

export default QuestionPollUnanswered