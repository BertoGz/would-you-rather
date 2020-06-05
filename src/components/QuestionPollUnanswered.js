import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import React, {Component} from 'react'
import {connect} from 'react-redux'


class QuestionPollUnanswered extends Component{
	render(){

		const {value} = 1
		const handleChange = (val) => {
	
		}


		return(
			<div className='question-poll'> 
				<h3>Would you rather</h3> 
					<hr/> 
				<div className='question-poll-options'>
<fieldset>
    <Form.Group >

      <Col >
        <Form.Check
          type="radio"
          label={this.props.question.optionOne.text}
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label={this.props.question.optionTwo.text}
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>
  </fieldset>
			    </div>
			    <button>Submit</button>
			</div>
		)
	}
}

function mapStateToProps({}){

}

export default QuestionPollUnanswered