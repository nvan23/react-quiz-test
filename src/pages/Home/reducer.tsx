import { GET_USER, SET_USER, RESET_USER } from './constant'

interface User {
  username: string,
  password: string,
}

interface InitialState {
  user: User
}

interface Action {
  type: string,
  payload: any,
}

const initialState: InitialState = {
  user: null
}

const homeReducer: Function = (state: InitialState = initialState, action: Action) => {
  switch (action.type) {
    case GET_USER: {
      return {
        state
      }
    }

    case SET_USER: {
      return {
        ...state,
        user: action.payload
      }
    }

    case RESET_USER: {
      return {
        ...state,
        user: null
      }
    }

    default:
      return state
  }
}

export default homeReducer