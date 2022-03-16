import { USERS_LIST, FILTER_RESULT } from '../Actions/ActionTypes'

const initialState = {
  userList: [],
  filterResult: []
}

const userListsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USERS_LIST:
      return {
        ...state,
        userList: action.payload
      }
    case FILTER_RESULT:
      return {
        ...state,
        filterResult: action.payload
      }

    default:
      return state
  }
}

export default userListsReducer
