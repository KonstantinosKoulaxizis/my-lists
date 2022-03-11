import { IS_AUTH } from '../Actions/ActionTypes'

const initialState = {
  isAuth: false
}

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case IS_AUTH:
      return {
        ...state,
        isAuth: action.payload
      }

    default:
      return state
  }
}

export default appReducer
