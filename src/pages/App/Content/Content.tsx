import './content.css'

import { ReactElement } from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from '../../Home'
import LoginPage from '../../Login'
import NotFoundPage from '../../NotFound'
import QuizChallenge from '../../QuizChallenge'
import ViewResult from '../../ViewResult'

export default function Content(): ReactElement {
  return (
    <div className='content__container'>
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/quiz-challenge' component={QuizChallenge} />
        <Route exact path='/view-result' component={ViewResult} />
        <Route exact path='/' component={HomePage} />
        <Route path='/403' component={NotFoundPage} />
        <Route path='/404' component={NotFoundPage} />
      </Switch>
    </div>
  )
}
