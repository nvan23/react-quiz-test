import { GET_USER, SET_USER, RESET_USER } from './constant'

export const getUser = () => {
  return {
    type: GET_USER
  }
}

export const setUser = (username, password) => {
  return {
    type: SET_USER,
    payload: {
      username,
      password,
    }
  }
}

export const resetUser = () => {
  return {
    type: RESET_USER
  }
}

