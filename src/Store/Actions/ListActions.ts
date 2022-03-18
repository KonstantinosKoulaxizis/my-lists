import ListTileModel from '../../Models/ListTileModel'
import { USERS_LIST, FILTER_RESULT, SELECTED_LIST } from './ActionTypes'

export const setUrerLists = (userList: ListTileModel[]) => ({
  type: USERS_LIST,
  payload: userList
})

export const setFilterResult = (filterResult: ListTileModel[]) => ({
  type: FILTER_RESULT,
  payload: filterResult
})

export const setSelectedList = (selected: ListTileModel) => ({
  type: SELECTED_LIST,
  payload: selected
})
