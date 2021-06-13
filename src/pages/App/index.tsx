import './base.css'
import './pages.css'

import { ReactElement } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Content from './Content'
import Footer from './Footer'
import Header from './Header'

export default function AppContainer(): ReactElement {
  return (
    <div className='grid'>
      <div className='page__container'>
        <Router>
          <Header />
          <Content />
          <Footer />
        </Router>
      </div>
    </div>
  )
}
