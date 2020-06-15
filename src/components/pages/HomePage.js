import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuestionItem from '../QuestionItem'
import {Link, withRouter} from 'react-router-dom'

import {setTabAction} from '../../actions/tab'

import ErrorPage from './ErrorPage'
class HomePage extends Component{

    

    state = {
		tab: this.props.tab  //will toggle between being on the not vote or voted tab
	}
	
	render(){	
			
			const handleChange = (val) => {
				console.log(val)
				//this.setState({tab:val})
   				const {dispatch} = this.props
				dispatch(setTabAction(val))
			}


		return(


			<div>
				{ this.props.loggedOff ? <h3 className='login-alert'>Please Login First</h3> :
					<div className='question-list-container'>
						<div className='question-tab'>	

							{/*shows two tabs, one for unanswered questions and one for answered*/}
							<Tabs
						      id="controlled-tab-example"
						      activeKey={this.props.tab}
						      onSelect={(k) => handleChange(k)}
						      transition={false}
						    >
						      <Tab eventKey="Unanswered" title="Unanswered">
							    
								<ul className='a'>

									{this.props.notVotedIds.map((id)=>(
										<li key={id}>
										
											<QuestionItem id={id}/>
										</li>
									))}

									{	//show a message implying user has no questions to answer
										this.props.notVotedIds<=0 &&
										<h3 style={{paddingTop:'100px',paddingBottom:'100px'}}>You are caught up</h3>
									}
								</ul>				    

						      </Tab>
						      
						      <Tab eventKey="Answered" title="Answered">
								
								<ul className='a'>
									{this.props.votedIds.map((id)=>(
										<li key={id}>
											
											<QuestionItem id={id}/>
										</li>
									))}
								</ul>	
						      </Tab>
						    </Tabs>					
						</div>


					</div>
				
				}
			</div>
		)
	}
}

function mapStateToProps({questions,authedUser,tab}){




	const _votedIds =Object.keys(questions).filter(q=>((questions[q].optionOne.votes.includes(authedUser)
	 || questions[q].optionTwo.votes.includes(authedUser)) )       )

	const _notVotedIds =Object.keys(questions).filter(q=> ( !questions[q].optionOne.votes.includes(authedUser) 
		&& !questions[q].optionTwo.votes.includes(authedUser) 
		)
	)      

	return{
		loggedOff: authedUser === null,
		tab,
		votedIds: _votedIds.sort((a,b)=>questions[b].timestamp-questions[a].timestamp),
		notVotedIds: _notVotedIds.sort((a,b)=>questions[b].timestamp-questions[a].timestamp)
	}
}

export default connect(mapStateToProps)(HomePage)