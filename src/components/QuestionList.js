import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuestionItem from './QuestionItem'
const NOT_VOTED = 'NOT_VOTED'
const VOTED = 'VOTED'




class QuestionList extends Component{

    

    state = {
		tab: NOT_VOTED  //will toggle between being on the not vote or voted tab
	}
	
	render(){
			const {value} = NOT_VOTED
			const handleChange = (val) => {
				console.log(val)
				this.setState({tab:val})
			}

		return(
			<div className='question-list-container'>


				<div className='question-tab'>	
					<ToggleButtonGroup type="radio" name='options' value={value} onChange={handleChange}>
					      <ToggleButton className='toggleButton' value='NOT_VOTED'>UnAnswered</ToggleButton>
					      <ToggleButton className='toggleButton' value='VOTED'>Answered</ToggleButton>
					</ToggleButtonGroup>
				</div>

				{ this.state.tab === VOTED ? 
					<ul className='a'>
						<h2>Voted</h2>	
						{this.props.votedIds.map((id)=>(
							<li key={id}>
								
								<QuestionItem id={id}/>
							</li>
						))}
					</ul>	
					:
					<ul className='a'>
						<h2>Not Voted</h2>
						{this.props.notVotedIds.map((id)=>(
							<li key={id}>
							
								<QuestionItem id={id}/>
							</li>
						))}
					</ul>
				}
			</div>
		)
	}
}

function mapStateToProps({questions,authedUser}){




	const _votedIds =Object.keys(questions).filter(q=>((questions[q].optionOne.votes.includes(authedUser)
	 || questions[q].optionTwo.votes.includes(authedUser)) )       )

	const _notVotedIds =Object.keys(questions).filter(q=> ( !questions[q].optionOne.votes.includes(authedUser) 
		&& !questions[q].optionTwo.votes.includes(authedUser) 
		)
	)      

	return{
		votedIds: _votedIds.sort((a,b)=>questions[b].timestamp-questions[a].timestamp),
		notVotedIds: _notVotedIds.sort((a,b)=>questions[b].timestamp-questions[a].timestamp)
	}
}

export default connect(mapStateToProps)(QuestionList)