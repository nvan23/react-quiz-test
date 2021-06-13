import './notAuthenticated.css'

import { Button, Result } from 'antd'
import { ReactElement } from 'react'
import React from 'react'

export default function NotAuthenticated (): ReactElement {
  return (
    <div className='not-authenticated__container'>
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Button type="primary">Back Home</Button>}
      />
    </div>
  )
}
