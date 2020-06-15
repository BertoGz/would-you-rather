import React,{Component} from 'react'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import {connect} from 'react-redux'
import {handleSetAuthedUser} from '../../actions/authedUser'
class LoginPage extends Component{
	state={
		click:false
	}





	render(){

		const handleLogin=(val)=>{
			
			this.props.dispatch(handleSetAuthedUser(val))
			//onsole.log("asdasd",val)
			//console.log("Asdasd",this.props.authedUser)
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
				    Select User
				  </Dropdown.Toggle>

				  <Dropdown.Menu>
				  	{
				  		this.props.accounts.map((user)=>(
				  			<Dropdown.Item key={user.id}
				  			style={{height:"40px",display:"flex",flexDirection:"row"}}
				  			onClick={(func) => handleLogin(user.id)}
				  			>
				  			<img style={{height:"30px"}}src={user.avatarURL} alt={`Avatar of ${user.name}`}
					className='avatar'/>
				  			{user.name}</Dropdown.Item>
				  		))
				  	}

				  </Dropdown.Menu>
				</Dropdown>

				<button className='buttonNormal' > Sign-In</button>
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

export default connect(mapStateToProps)(LoginPage)