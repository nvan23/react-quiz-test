import { useState, useEffect, ReactElement } from 'react'
import { AxiosResponse } from 'axios'

import { Typography, Space, Tabs, Alert, Radio, Empty } from 'antd'
import Box from '../../components/Box'

import './quiz-challenge.css'

import { getQuiz } from '../../requester/quiz'

interface Quiz {
  id: number,
  question: string,
  choices: {
    A: string,
    B: string,
    C: string,
    D: string,
  }
}

export default function NotFound (): ReactElement {

  const [visible, setVisible] = useState<boolean>(true)
  const [selectedOption, setSelectedOption] = useState<number>(1)
  const [quiz, setQuiz] = useState<Array<object>>([])

  useEffect(() => {
    getQuiz()
      .then(res => {
        if (res.status) {
          return setQuiz(res.data.result)
        }
      })
      .catch(err => console.log(err))
  }, [])

  console.log(quiz)

  const { Text } = Typography
  const { TabPane } = Tabs

  function callback (key) {
    console.log(key)
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
        quiz?.length
          ? (
            <Space direction="vertical" style={{ width: '100%' }}>
              <Text strong>Question list for React challenger: 1/3</Text>

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
                      <>
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
                                      return <Radio value={option[0]}>{option[1]}</Radio>
                                    }
                                  )
                                }
                              </Space>
                            </Radio.Group>
                          </Space>
                        </TabPane>
                      </>
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
    </div >
  )
}

