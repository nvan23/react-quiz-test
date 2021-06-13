import './home.css'

import React, { ReactElement } from 'react'
import { Result, Button } from 'antd'

export default function FinishedContest (): ReactElement {
  return (
    <Result
      title="Challenge Accepted"
      subTitle="You have not finished your challenge yet. Get it now to receive your ranking"
      extra={
        <Button type="primary" href='/quiz-challenge'>
          Go to Quiz Challenge
        </Button>
      }
    />
  )
}
