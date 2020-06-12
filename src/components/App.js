import React,{Component, Fragment} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'

import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
 
 import QuestionItem from './QuestionItem'
import AnswerQuestionPage from './pages/AnswerQuestionPage'
import HomePage from './pages/HomePage'
import NavigationBar from './NavigationBar'



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
            <NavigationBar/>
              {
                this.props.loading === true 
                ? null : 
                <div> 
                  <Route path='/' exact component={HomePage}/>
                  <Route path='/poll/:id'  component={AnswerQuestionPage}/>
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