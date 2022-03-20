import { USERS_LIST, SELECTED_LIST, SELECTED_TASK } from './ActionTypes'

import ListTileModel from '../../Models/ListTileModel'
import SelectedTaskModel from '../../Models/SelectedTaskModel'


export const setUrerLists = (userLists: ListTileModel[]) => ({
  type: USERS_LIST,
  payload: userLists
})

export const setSelectedList = (selected: ListTileModel) => ({
  type: SELECTED_LIST,
  payload: selected
})

export const setSelectedTask = (selected: SelectedTaskModel) => ({
  type: SELECTED_TASK,
  payload: selected
})
