import './home.css'

import React, { ReactElement } from 'react'
import { Result, Button } from 'antd'

export default function ChallengeAccepted (): ReactElement {
  return (
    <Result
      title="Challenge Accepted"
      key='quiz-challenge-result'
      subTitle="You have not finished your challenge yet. Get it now to receive your ranking"
      extra={
        <Button type="primary" key='quiz-challenge' href='/quiz-challenge'>
          Go to Quiz Challenge
        </Button>
      }
    />
  )
}
