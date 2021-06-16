import { useState, useEffect, ReactElement } from 'react'

import {
  Typography,
  Space,
  Tabs,
  Alert,
  Radio,
  Empty,
  Spin,
  Button,
  Popconfirm,
} from 'antd'

import Box from '../../components/Box'

import './quiz-challenge.css'

import { getQuiz, submitAnswer } from '../../requester/quiz'
import { storeAnswer, storeResult } from '../../services/quiz'

interface IAnswer {
  id: number,
  choice: string,
}

export default function QuizChallenge (): ReactElement {

  const [visible, setVisible] = useState<boolean>(true)
  const [, setSelectedOption] = useState<number>(1)
  const [questionIndex, setQuestionIndex] = useState<string>('1')
  const [quiz, setQuiz] = useState<Array<object>>([])
  const [answers, setAnswers] = useState<Array<object>>([])
  const [loading, setLoading] = useState<boolean>(true)

  const [visibleSubmitConfirm, setVisibleSubmitConfirm] = useState<boolean>(false)
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false)
  const [disabledOptions, setDisabledOptions] = useState<boolean>(false)

  useEffect(() => {
    getQuiz()
      .then(res => {
        if (res.status) {
          setLoading(false)

          const answers: Array<IAnswer> = res.data.result.map((a, i) => {
            const answer: IAnswer = {
              id: i + 1,
              choice: ''
            }
            return answer
          })
          setAnswers(answers)

          return setQuiz(res.data.result)
        }
      })
      .catch(err => console.log(err))
  }, [])

  const { Text } = Typography
  const { TabPane } = Tabs

  function callback (key) {
    setQuestionIndex(key)
  }

  function handleClose () {
    setVisible(false)
  }

  function onChange (e) {
    const answersContainer: Array<IAnswer> = [...answers]
    answersContainer[parseInt(questionIndex) - 1].choice = e.target.value

    setAnswers(answersContainer)
    setSelectedOption(e.target.value)
  }

  function handleOk () {
    setConfirmLoading(true)

    submitAnswer(answers)
      .then(res => {
        if (res.status) {
          setConfirmLoading(false)
          setVisibleSubmitConfirm(false)
          setDisabledOptions(true)
          storeAnswer(quiz, answers)
          storeResult(res.data)
        }
      })
      .catch(err => console.log(err))
  }

  function handleCancel () {
    setVisibleSubmitConfirm(false)
  }

  return (
    <div className='quiz-challenge__container'>
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
            <>
              {
                quiz?.length
                  ? (
                    <Space direction="vertical" style={{ width: '100%' }}>

                      <div style={{
                        display: 'flex',
                        margin: 'auto',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                        <Text key={questionIndex} strong>
                          Question list for React challenger: {questionIndex}/{quiz?.length}
                        </Text>

                        <Popconfirm
                          title="Are you sure to submit your answer?"
                          visible={visibleSubmitConfirm}
                          onConfirm={handleOk}
                          okButtonProps={{ loading: confirmLoading }}
                          onCancel={handleCancel}
                          cancelText='Cancel'
                        >
                          <Button key='submit-btn' type='link' onClick={() => setVisibleSubmitConfirm(true)}>
                            Submit result
                          </Button>
                        </Popconfirm>
                      </div>

                      {
                        visible && (
                          <Alert
                            message="Choose the best answer of the following question"
                            type='info'
                            style={{
                              width: '100%',
                            }}
                            closable
                            showIcon
                            afterClose={handleClose} />
                        )
                      }

                      <Tabs defaultActiveKey="1" onChange={callback}>
                        {
                          quiz.map((q: any) => {
                            return (
                              <TabPane tab={`Q${q?.id}`} key={q?.id}>
                                <Space direction="vertical" style={{ width: '100%' }}>
                                  <Box>
                                    <Text strong>{q?.question}</Text>
                                  </Box>

                                  <Radio.Group
                                    onChange={onChange}
                                    disabled={disabledOptions}
                                  >
                                    <Space direction="vertical">
                                      {
                                        Object.entries(q?.choices).map(
                                          option => {
                                            return <Radio key={option[0]} value={option[0]}>{option[0]}. {option[1]}</Radio>
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

                    </Space>
                  )
                  : (
                    <div style={{
                      display: 'flex',
                      margin: 'auto',
                      alignItems: 'center',
                    }}>
                      <Empty />
                    </div>
                  )
              }
            </>
          )
      }
    </div >
  )
}

