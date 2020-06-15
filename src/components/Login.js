import React,{Component} from 'react'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import {connect} from 'react-redux'
import {handleSetAuthedUser} from '../actions/authedUser'
class Login extends Component{
	state={
		click:false,
		userText:'Select User',
		user: ''

	}





	render(){

		const onChange=(val)=>{
					this.setState({user:val,userText:val})
		
		}
		const handleLogin=(val)=>{
			if (val!=='')
			{
				this.setState({user:val})
				this.props.dispatch(handleSetAuthedUser(val))
			}
			else
			{
				alert('please choose an account')
			}
		}


		return(
			<div className='leaderboard-item-container'>
				<div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
				<hr/>
				<h3> Would You Rather?</h3>
				<hr/>
				<h5 >Sign In</h5>
				</div>
				<Dropdown>
				  <Dropdown.Toggle variant="light" id="dropdown-basic" >
				    {this.state.userText}
				  </Dropdown.Toggle>

				  <Dropdown.Menu>
				  	{
				  		this.props.accounts.map((user)=>(
				  			<Dropdown.Item key={user.id}
				  			style={{height:"40px",display:"flex",flexDirection:"row"}}
				  			onClick={(func) => onChange(user.id)}
				  			>
				  			<img style={{height:"30px"}}src={user.avatarURL} alt={`Avatar of ${user.name}`}
							className='avatar'/>
				  			{user.name}</Dropdown.Item>
				  		))
				  	}

				  </Dropdown.Menu>
				</Dropdown>

				<button onClick={(func)=>handleLogin(this.state.user)}className='buttonNormal' > Sign-In</button>
			</div>
		)
	}
}

function mapStateToProps({users}){
	const accounts = Object.values(users)

	return{
		accounts,

	}
}

export default connect(mapStateToProps)(Login)