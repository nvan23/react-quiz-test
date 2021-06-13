import './home.css'

import React, { ReactElement } from 'react'
import { Result, Button } from 'antd'

export default function ReadyForChallenge (): ReactElement {
  return (
    <Result
      status="warning"
      title="Are you ready to challenge?"
      subTitle="The quiz is ready to start, but you need to login first to accept it"
      extra={
        <Button type="primary" href="/login">
          Login to your account
        </Button>
      }
    />
  )
}
