const USER: string = 'user'
const RESULT: string = 'result'

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

function setUser (user: object) {
  localStorage.setItem(USER, JSON.stringify(user))
}

function removeUser () {
  localStorage.removeItem(USER)
}

// contest result
function getResult () {
  return JSON.parse(localStorage.getItem(RESULT))
}

function setResult (token: string) {
  localStorage.setItem(RESULT, JSON.stringify(token))
}

function removeResult () {
  localStorage.removeItem(RESULT)
}
