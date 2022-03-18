import { USERS_LIST, SELECTED_LIST, SELECTED_TASK } from '../Actions/ActionTypes'

const initialState = {
  userList: [],
  selectedList: {},
  selectedTask: {}
}

const userListsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USERS_LIST:
      return {
        ...state,
        userList: action.payload
      }
    case SELECTED_LIST:
      return {
        ...state,
        selectedList: action.payload
      }
    case SELECTED_TASK:
      return {
        ...state,
        selectedTask: action.payload
      }
    default:
      return state
  }
}

export default userListsReducer
