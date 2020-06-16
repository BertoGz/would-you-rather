import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Switch} from 'react-router'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleSetAuthedUser} from '../actions/authedUser'

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

	toLogin=()=>{
		this.props.history.push(`/`)
	}

	logOut=()=>{
		this.props.dispatch(handleSetAuthedUser(null))
		this.props.history.push(`/`)
	}
	render(){


		return(
			<div>
				
					<div className='navigation-bar'>
				
						<div className='navigation-bar-nav'>
							<div className='navigation-bar-nav-links'></div>
								<div className='navigation-bar-nav-links'>
								<Switch>
									<Route exact path='/'>
										<p onClick={this.toHome} style={{fontWeight: "bold", color:"blue"}}>Home</p>	
										<p  onClick={this.toAdd}>New Question</p>
										<p onClick={this.toLeaderboard}>Leaderboard</p>
									</Route>

									<Route exact path='/add'>
										<p onClick={this.toHome} >Home</p>	
										<p  onClick={this.toAdd} style={{fontWeight: "bold", color:"blue"}}>New Question</p>
										<p onClick={this.toLeaderboard}>Leaderboard</p>
									</Route>
									<Route exact path='/leaderboard'>
										<p onClick={this.toHome} >Home</p>	
										<p  onClick={this.toAdd} >New Question</p>
										<p onClick={this.toLeaderboard} style={{fontWeight: "bold", color:"blue"}}>Leaderboard</p>
									</Route>
									<Route >
										<p onClick={this.toHome} >Home</p>	
										<p  onClick={this.toAdd} >New Question</p>
										<p onClick={this.toLeaderboard} >Leaderboard</p>
									</Route>
								</Switch>

								</div>
								{ this.props.authedUser===null &&
									<div className='navigation-bar-nav-links'>
										
								
									<p onClick={this.toLogin} >Login</p>
									</div>
								}

								{ this.props.authedUser!==null &&
									<div className='navigation-bar-nav-links'>
										
									<h5 style={{fontWeight: "bold", verticalAlign:"middle",margin:"10px "}}>Hello, {this.props.authedUser}</h5>
									<p onClick={this.logOut} >Logout</p>
									</div>
								}
							</div>
					
					</div>
				
			</div>
		)
	}


}


function mapStateToProps({authedUser}){
	return{
		loggedOff: authedUser === null,
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