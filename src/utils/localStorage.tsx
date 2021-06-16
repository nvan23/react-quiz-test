const USER: string = 'user'
const RESULT: string = 'result'
const ANSWER: string = 'answer'

export {
  getUser,
  setUser,
  removeUser,
  getAnswer,
  setAnswer,
  removeAnswer,
  getResult,
  setResult,
  removeResult,
}

// user information
function getUser () {
  return JSON.parse(localStorage.getItem(USER))
}

function setUser (user: object) {
  localStorage.setItem(USER, JSON.stringify(user))
}

function removeUser () {
  localStorage.removeItem(USER)
}

// contest answer
function getAnswer () {
  return JSON.parse(localStorage.getItem(ANSWER))
}

function setAnswer (answer: Array<object>) {
  localStorage.setItem(ANSWER, JSON.stringify(answer))
}

function removeAnswer () {
  localStorage.removeItem(ANSWER)
}

// contest result
function getResult () {
  return JSON.parse(localStorage.getItem(RESULT))
}

function setResult (result: object) {
  localStorage.setItem(RESULT, JSON.stringify(result))
}

function removeResult () {
  localStorage.removeItem(RESULT)
}
