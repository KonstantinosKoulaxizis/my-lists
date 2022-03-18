import ListTileModel from '../../Models/ListTileModel'
import SelectedTaskModel from '../../Models/SelectedTaskModel'

import { USERS_LIST, SELECTED_LIST, SELECTED_TASK } from './ActionTypes'

export const setUrerLists = (userList: ListTileModel[]) => ({
  type: USERS_LIST,
  payload: userList
})

export const setSelectedList = (selected: ListTileModel) => ({
  type: SELECTED_LIST,
  payload: selected
})

export const setSelectedTask = (selected: SelectedTaskModel) => ({
  type: SELECTED_TASK,
  payload: selected
})
