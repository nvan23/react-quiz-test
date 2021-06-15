import {
  getUser,
  setUser,
  removeUser,
} from '../utils/localStorage'

import { config } from '../config'

export {
  isLoggedIn,
  loadUser,
  login,
  logout,
}

function isLoggedIn () {
  if (!getUser()) return false
  return true
}

function loadUser () {
  return getUser()
}

function login (username: string, password: string, remember: boolean) {
  if (username === config.USER.USERNAME && password === config.USER.PASSWORD) {
    if (remember) {
      const user: object = {
        username,
        password
      }
      setUser(user)
    }
    return true
  }
  return false
}

function logout () {
  removeUser()
  return true
}