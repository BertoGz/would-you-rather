import React,{Component} from 'react'
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

class NavigationBar extends Component{

	toHome=()=>{
		this.props.history.push(`/`)
	}

	toAdd=()=>{
		this.props.history.push(`/add`)
	}

	toLeaderboard=()=>{
		this.props.history.push(`/leaderboard`)
	}

	render(){
		return(

			<div className='navigation-bar'>
				<div className='navigation-bar-nav'>
					<div className='navigation-bar-nav-links'></div>
					<div className='navigation-bar-nav-links'>
					
					<Route exact path='/'>
						<a onClick={this.toHome} style={{fontWeight: "bold", color:"blue"}}>Home</a>	
						<a  onClick={this.toAdd}>New Question</a>
						<a onClick={this.toLeaderboard}>Leaderboard</a>
					</Route>

					<Route exact path='/add'>
						<a onClick={this.toHome} >Home</a>	
						<a  onClick={this.toAdd} style={{fontWeight: "bold", color:"blue"}}>New Question</a>
						<a onClick={this.toLeaderboard}>Leaderboard</a>
					</Route>
					<Route exact path='/leaderboard'>
						<a onClick={this.toHome} >Home</a>	
						<a  onClick={this.toAdd} >New Question</a>
						<a onClick={this.toLeaderboard} style={{fontWeight: "bold", color:"blue"}}>Leaderboard</a>
					</Route>

					</div>
					<div className='navigation-bar-nav-links'>
					<h5 style={{fontWeight: "bold", verticalAlign:"middle",margin:"10px "}}>Hello, {this.props.authedUser}</h5>
					<a>Logout</a>
					</div>
				</div>
			</div>

		)
	}


}


function mapStateToProps({authedUser}){
	return{
		authedUser,
	}
}

export default withRouter(connect(mapStateToProps)(NavigationBar))

/*
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
		  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  <Navbar.Collapse id="responsive-navbar-nav">
		    <Nav className="mr-auto">
		      <Nav.Link onClick={this.toHome}>Home</Nav.Link>
		      <Nav.Link onClick={this.toAdd}>New Question</Nav.Link>
		      <Nav.Link onClick={this.toLeaderboard}>Leaderboard</Nav.Link>
		    </Nav>
		    <Nav>
		      <Nav.Link href="#deets">Hello You..</Nav.Link>
		      <Nav.Link eventKey={2} href="#memes">
		        logout
		      </Nav.Link>
		    </Nav>
		  </Navbar.Collapse>
		</Navbar>
	*/