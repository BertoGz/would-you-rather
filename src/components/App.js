import React,{Component} from 'react'

import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
 

 import QuestionList from './QuestionList'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component{

	componentDidMount(){
		this.props.dispatch(handleInitialData())
	}


  render(){
    return(
      <Router>
          <div>
            {
              this.props.loading === true ?
              null : 
              <div> 
                <Route path='/' exact component={QuestionList}/>
                <Route path='/poll' exact component={QuestionList}/>
              </div> 
            }
          </div>
      </Router>
    )
  }
}

function mapStateToProps({authedUser}){
  return{
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)