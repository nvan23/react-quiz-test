import { ReactElement } from 'react'
import { Router } from 'react-router-dom'

import Content from './Content'
import Footer from './Footer'
import Header from './Header'

import './base.css'
import './pages.css'

import { history } from '../../helpers/history'

export default function AppContainer (): ReactElement {
  return (
    <div className='grid'>
      <div className='page__container'>
        <Router history={history}>
          <Header />
          <Content />
          <Footer />
        </Router>
      </div>
    </div>
  )
}
