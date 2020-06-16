import React,{Component} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import {connect} from 'react-redux'
import {handleSetAuthedUser} from '../actions/authedUser'
class Login extends Component{
	state={
		click:false,
		userText:'Select User',
		user: '',

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
			<div className='leaderboard-item-container' style={{width:'460px',display:'flex',flexDirection:'column',justifyContent:'center', marginTop:'20px'}}>
				<div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
					<hr/>
					<h3> Login to your account</h3>
					<hr/>
					<hr/>
				</div>
					<Dropdown>
					  <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{width:'300px'}}>
					    {this.state.userText}
					  </Dropdown.Toggle>

					  <Dropdown.Menu>
					  	{
					  		this.props.accounts.map((user)=>(
					  			<Dropdown.Item key={user.id}
					  			style={{height:"40px",width:'300px',display:"flex",padding:'0px 30px 0px 30px',flexDirection:"row",justifyContent:'space-between',alignItems:'center'}}
					  			onClick={(func) => onChange(user.id)}
					  			>
					  			<img style={{height:"30px",margin:'0px'}}src={user.avatarURL} alt={`Avatar of ${user.name}`}
								className='avatar'/>
					  			{user.name}</Dropdown.Item>
					  		))
					  	}

					  </Dropdown.Menu>
					</Dropdown>

				<button onClick={(func)=>handleLogin(this.state.user)}className='buttonNormal' style={{marginRight:'240px'}} > Sign-In</button>
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