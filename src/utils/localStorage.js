const USER = 'user'
const RESULT = 'result'

export {
  getUser,
  setUser,
  removeUser,
  getResult,
  setResult,
  removeResult,
}

// user information
function getUser () {
  return JSON.parse(localStorage.getItem(USER))
}

function setUser (token) {
  localStorage.setItem(USER, JSON.stringify(token))
}

function removeUser () {
  localStorage.removeItem(USER)
}

// contest result
function getResult () {
  return JSON.parse(localStorage.getItem(RESULT))
}

function setResult (token) {
  localStorage.setItem(RESULT, JSON.stringify(token))
}

function removeResult () {
  localStorage.removeItem(RESULT)
}
