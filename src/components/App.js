import React,{Component, Fragment} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Switch} from 'react-router'
import LoadingBar from 'react-redux-loading'

import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
 
import NavigationBar from './NavigationBar'

import HomePage from './pages/HomePage'
import AnswerQuestionPage from './pages/AnswerQuestionPage'
import LeaderboardPage from './pages/LeaderboardPage'
import NewQuestionPage from './pages/NewQuestionPage'
import ErrorPage from './pages/ErrorPage'

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
                this.props.loading? null :
                <Switch> 

                  <Route path='/' exact component={HomePage}/>
                  <Route path='/poll/:id'  component={AnswerQuestionPage}/>
                  <Route path='/add' component={NewQuestionPage}/>
                  <Route path='/leaderboard' exact component={LeaderboardPage} />
                  <Route component={ErrorPage} />
                </Switch>
              }
          </div>
          </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({users,loadingBar}){
  return{
    loading: users === null
  }
}

export default connect(mapStateToProps)(App)