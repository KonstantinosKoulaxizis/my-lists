import { USERS_LIST, FILTER_RESULT, SELECTED_LIST } from '../Actions/ActionTypes'

const initialState = {
  userList: [],
  filterResult: [],
  selectedList: {}
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
    case SELECTED_LIST:
      return {
        ...state,
        selectedList: action.payload
      }
    default:
      return state
  }
}

export default userListsReducer
