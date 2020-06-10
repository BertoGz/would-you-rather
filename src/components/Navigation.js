import React,{Component} from 'react'
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

class Navigation extends Component{


	render(){
		return(

		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
		  <Navbar.Brand href="#home">Would You Rather...</Navbar.Brand>
		  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  <Navbar.Collapse id="responsive-navbar-nav">
		    <Nav className="mr-auto">
		      <Nav.Link href="#features">Home</Nav.Link>
		      <Nav.Link href="#pricing">New Question</Nav.Link>
		      <Nav.Link href="#pricing">Leaderboard</Nav.Link>
		    </Nav>
		    <Nav>
		      <Nav.Link href="#deets">Hello You..</Nav.Link>
		      <Nav.Link eventKey={2} href="#memes">
		        logout
		      </Nav.Link>
		    </Nav>
		  </Navbar.Collapse>
		</Navbar>

		)
	}


}

export default Navigation