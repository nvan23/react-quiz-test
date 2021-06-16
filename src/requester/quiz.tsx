import axios from 'axios'

import headerOptions from '../helpers/setHeader'

import { config } from '../config'

export {
  getQuiz,
  submitAnswer,
}

/**
 * [GET] - /quiz - GET QUIZ
 *
 */
function getQuiz () {
  return axios.get(`${config.API_URL}/quiz`, headerOptions())
}


/**
 * [POST] - /quiz/answer - REGISTER
 *
 * @param {array} answer
 */

function submitAnswer (answer: Array<object>) {
  return axios.post(
    `${config.API_URL}/quiz/answer`,
    {
      "listAnswer": answer,
    },
    headerOptions()
  )
}
