import React,{Component, Fragment} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'

import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
 
import QuestionItem from './QuestionItem'
import NavigationBar from './NavigationBar'

import HomePage from './pages/HomePage'
import AnswerQuestionPage from './pages/AnswerQuestionPage'
import LeaderboardPage from './pages/LeaderboardPage'
import NewQuestionPage from './pages/NewQuestionPage'
import LoginPage from './pages/LoginPage'



class App extends Component{

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }


  render(){
    return(
      <Router>
      <Fragment>
      <LoadingBar/>
      <NavigationBar/>
          <div>
              {
                this.props.loading === true 
                ? null : 
                <div> 
                  <Route path='/' exact component={HomePage}/>
                  <Route path='/poll/:id'  component={AnswerQuestionPage}/>
                  <Route path='/add' component={NewQuestionPage}/>
                  <Route path='/leaderboard' exact component={LeaderboardPage} />
                  <Route path='/login' exact component={LoginPage}/>
                </div> 
              }
          </div>
          </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({autherUser}){
  return{
    loggedIn: autherUser === 1  
  }
}

export default connect(mapStateToProps)(App)