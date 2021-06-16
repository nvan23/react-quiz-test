import {
  getResult,
  setResult,
  removeResult,
  getAnswer,
  setAnswer,
  removeAnswer,
} from '../utils/localStorage'

export {
  isTakenContest,
  loadAnswer,
  loadResult,
  storeAnswer,
  storeResult,
}

function isTakenContest () {
  if (!getResult()) return false
  return true
}

function loadResult () {
  return getResult()
}

function loadAnswer () {
  return getAnswer()
}

function storeAnswer (quiz: Array<object>, answer: Array<object>) {
  let answerContainer: Array<object> = []

  for (let i = 0; i < quiz?.length; i++) {
    answerContainer.push({ ...quiz[i], ...answer[i] })
  }

  if (getAnswer()) {
    removeAnswer()
  }
  setAnswer(answerContainer)
}

function storeResult (result: object) {
  if (getResult()) {
    removeResult()
  }
  setResult(result)
}

