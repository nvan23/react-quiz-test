import { useState, useEffect, ReactElement } from 'react'

import {
  Typography,
  Space,
  Tabs,
  Alert,
  Radio,
  Divider,
  Spin,
  Button,
} from 'antd'

import Box from '../../components/Box'
import ChallengeAccepted from '../Home/ChallengeAccepted'

import './view-result.css'

import { isTakenContest, loadAnswer, loadResult } from '../../services/quiz'

export default function ViewResult (): ReactElement {
  const [loading, setLoading] = useState<boolean>(true)
  const [quiz, setQuiz] = useState<Array<object>>([])
  const [questionIndex, setQuestionIndex] = useState<string>('1')
  const [answer, setAnswer] = useState<Array<object>>([])
  const [questionAnswerIndex, setQuestionAnswerIndex] = useState<string>('1')

  const { Text } = Typography
  const { TabPane } = Tabs

  useEffect(() => {
    setQuiz(loadResult()?.incorrectAnswers)

    if (!loadResult()?.incorrectAnswers?.length) {
      setAnswer(loadAnswer())
    } else {
      const answerContainer: Array<object> = loadAnswer()
      const resultContainer: Array<object> = loadResult()?.incorrectAnswers
      answerContainer.forEach(
        (a, i) => {
          resultContainer.forEach(r => {
            if (r?.id.toString() === a?.id.toString()) {
              answerContainer.splice(i, 1)
            }
          })
        }
      )
      setAnswer(answerContainer)
    }

    setLoading(false)
  }, [])

  function callback (key) {
    const index = quiz.findIndex(q => q?.id.toString() === key)
    setQuestionIndex(index + 1)
  }

  function callbackAnswer (key) {
    const index = answer.findIndex(a => a?.id.toString() === key)
    setQuestionAnswerIndex(index + 1)
  }

  return (
    <div className='view-result__container'>
      {
        isTakenContest()
          ? (
            <>
              {
                loading
                  ? (
                    <div style={{
                      display: 'flex',
                      margin: 'auto',
                      alignItems: 'center',
                    }}>
                      <Spin size="large" tip="Loading..."></Spin>
                    </div>
                  )
                  : (
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Alert
                        message={`The result of your quiz is ${(loadResult()?.status) === 'P' ? 'pass' : 'fail'}`}
                        type={loadResult()?.status === 'P' ? 'success' : 'error'}
                        style={{
                          width: '100%',
                        }}
                        showIcon
                      />

                      {
                        quiz?.length && (
                          <>
                            <div style={{
                              display: 'flex',
                              margin: 'auto',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}>
                              <Text key={questionIndex} strong>
                                Question list for React challenger: {questionIndex}/{quiz?.length}
                              </Text>

                              <Button key='submit-btn' type='link' href='/quiz-challenge'>
                                Try again
                              </Button>
                            </div>

                            <Tabs defaultActiveKey="1" onChange={callback}>
                              {
                                quiz.map((q: any) => {
                                  return (
                                    <TabPane tab={`Q${q?.id}`} key={q?.id}>
                                      <Space direction="vertical" style={{ width: '100%' }}>
                                        <Box>
                                          <Text strong>{q?.question}</Text>
                                        </Box>

                                        <Radio.Group disabled>
                                          <Space direction="vertical">
                                            {
                                              Object.entries(q?.choices).map(
                                                option => {
                                                  return <Radio key={option[0]} value={option[0]}>{option[1]}</Radio>
                                                }
                                              )
                                            }
                                          </Space>
                                        </Radio.Group>
                                      </Space>
                                    </TabPane>
                                  )
                                })
                              }
                            </Tabs>

                          </>
                        )
                      }

                      <Divider />

                      {
                        answer?.length && (
                          <>
                            <Alert
                              message='Questions that you answered correctly'
                              type='success'
                              style={{
                                width: '100%',
                              }}
                              showIcon
                            />

                            <div style={{
                              display: 'flex',
                              margin: 'auto',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}>
                              <Text key={questionAnswerIndex} strong>
                                Question list for React challenger: {questionIndex}/{answer?.length}
                              </Text>
                            </div>

                            <Tabs defaultActiveKey="1" onChange={callbackAnswer}>
                              {
                                answer.map((a: any) => {
                                  return (
                                    <TabPane tab={`Q${a?.id}`} key={a?.id}>
                                      <Space direction="vertical" style={{ width: '100%' }}>
                                        <Box>
                                          <Text strong>{a?.question}</Text>
                                        </Box>

                                        <Radio.Group disabled value={a?.choice}>
                                          <Space direction="vertical">
                                            {
                                              Object.entries(a?.choices).map(
                                                option => {
                                                  return <Radio key={option[0]} value={option[0]}>{option[1]}</Radio>
                                                }
                                              )
                                            }
                                          </Space>
                                        </Radio.Group>
                                      </Space>
                                    </TabPane>
                                  )
                                })
                              }
                            </Tabs>

                          </>
                        )
                      }

                    </Space>
                  )
              }
            </>
          )
          : (
            <div style={{
              display: 'flex',
              margin: 'auto',
              flexDirection: 'column',
            }}>
              < ChallengeAccepted />
            </div>
          )
      }
    </div >
  )
}
