import './home.css'

import React, { ReactElement } from 'react'
import { Result, Button } from 'antd'

export default function ChallengeAccepted (): ReactElement {
  return (
    <Result
      status="success"
      title="You have finished your contest"
      subTitle="You have finished the Quiz challenge. You can view you score or take the challenge again"
      extra={[
        <Button key="view-result-btn" type="primary" href='/view-result'>
          View result
        </Button>,
        <Button key="try-again-btn" href='/quiz-challenge'>Try Again</Button>,
      ]}
    />
  )
}
