const USER = 'user'

export {
  getUser,
  setUser,
  removeUser,
}

function getUser () {
  return JSON.parse(localStorage.getItem(USER))
}

function setUser (token) {
  localStorage.setItem(USER, JSON.stringify(token))
}

function removeUser () {
  localStorage.removeItem(USER)
}
