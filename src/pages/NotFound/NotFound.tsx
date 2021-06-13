import './notFound.css'

import { Button, Result } from 'antd'
import { ReactElement } from 'react'
import React from 'react'

export default function NotFound (): ReactElement {
  return (
    <div className='not-found__container'>
      <Result
        status='404'
        title='404'
        subTitle='Sorry, you have accessed a not-existing route.'
        extra={
          <Button type='primary' href='/'>
            Back Home
          </Button>
        }
      />
    </div>
  )
}
