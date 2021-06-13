import {
  getUser,
  setUser,
  removeUser,
} from '../../utils/localStorage'

export {
  isLoggedIn,
}

function isLoggedIn () {
  if (!getUser) return false
  return true
}

