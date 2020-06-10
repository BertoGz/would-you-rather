import React,{Component, Fragment} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'

import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
 
 import QuestionItem from './QuestionItem'
import AnswerQuestionPage from './AnswerQuestionPage'
import HomePage from './HomePage'
import Navigation from './Navigation'



class App extends Component{

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }


  render(){
    return(
      <Router>
      <Fragment>
      <LoadingBar/>
          <div className='container'>
            <Navigation/>
              {
                this.props.loading === true 
                ? null : 
                <div> 
                  <Route path='/' exact component={HomePage}/>
                  <Route path='/poll/:id'  component={AnswerQuestionPage}/>
                  <Route path='/result/:id'   component={HomePage}/>
                </div> 
              }
          </div>
          </Fragment>
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