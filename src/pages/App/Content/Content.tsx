import './content.css'

import React, { ReactElement } from 'react'
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import HomePage from '../../Home'
import LoginPage from '../../Login'
import NotFoundPage from '../../NotFound'
import NotAuthenticated from '../../NotAuthenticated'
import QuizChallenge from '../../QuizChallenge'
import ViewResult from '../../ViewResult'

import PrivateRoute from '../../../components/PrivateRoute'

import { isLoggedIn } from '../../../services/user'

export default function Content (): ReactElement {

  return (
    <div className='content__container'>
      <Switch>
        <Route exact path='/login'>
          {isLoggedIn() ? <Redirect to="/" /> : <LoginPage />}
        </Route>

        <PrivateRoute exact path='/quiz-challenge' >
          <QuizChallenge />
        </PrivateRoute>
        
        <PrivateRoute exact path='/view-result'>
          <ViewResult />
        </PrivateRoute>
        
        <Route exact path='/' component={HomePage} />
        <Route path='/403' component={NotAuthenticated} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
}
