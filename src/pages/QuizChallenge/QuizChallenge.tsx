import { useState, useEffect, ReactElement } from 'react'

import {
  Typography,
  Space,
  Tabs,
  Alert,
  Radio,
  Empty,
  Spin,
} from 'antd'

import Box from '../../components/Box'

import './quiz-challenge.css'

import { getQuiz } from '../../requester/quiz'

export default function QuizChallenge (): ReactElement {

  const [visible, setVisible] = useState<boolean>(true)
  const [selectedOption, setSelectedOption] = useState<number>(1)
  const [questionIndex, setQuestionIndex] = useState<string>('1')
  const [quiz, setQuiz] = useState<Array<object>>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    getQuiz()
      .then(res => {
        if (res.status) {
          setLoading(false)
          return setQuiz(res.data.result)
        }
      })
      .catch(err => console.log(err))
  }, [])

  console.log(quiz)

  const { Text } = Typography
  const { TabPane } = Tabs

  function callback (key) {
    setQuestionIndex(key)
  }

  function handleClose () {
    setVisible(false)
  }

  function onChange (e) {
    console.log('radio checked', e.target.value)
    setSelectedOption(e.target.value)
  };

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
                      <Text key={questionIndex} strong>Question list for React challenger: {questionIndex}/{quiz?.length}</Text>

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
                                    value={null}
                                  >
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

