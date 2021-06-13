import React, { useState, useEffect, ReactElement } from 'react'

import ChallengeAccepted from './FinishedContest'
import FinishedContest from './ChallengeAccepted'
import ReadyForChallenge from './ReadyForChallenge'

import {
  message,
} from 'antd'

import './home.css'

import { isLoggedIn, loadUser } from '../../services/user'
import { isTakenContest } from '../../services/challenge'

interface userInterface {
  username?: string,
  password?: string,
}

export default function Home (): ReactElement {
  const [user, setUser] = useState<userInterface | null>(null)
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const [takenContest, setTakenContest] = useState<boolean>(false)

  useEffect(() => {
    if (isLoggedIn()) {
      setLoggedIn(isLoggedIn())
      setUser(loadUser())
    }
  }, [isLoggedIn()])

  useEffect(() => {
    if (isTakenContest()) {
      setTakenContest(isTakenContest())
    }
  }, [isTakenContest()])

  useEffect(() => {
    user?.username && message.success(`Welcome back ${user?.username}`)
  }, [user])

  return (
    <div className='home__container'>{
      loggedIn
        ? (
          takenContest
            ? <FinishedContest />
            : <ChallengeAccepted />
        )
        : <ReadyForChallenge />
    }
    </div>
  )
}
