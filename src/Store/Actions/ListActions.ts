import ListTileModel from '../../Models/ListTileModel'
import { USERS_LIST, FILTER_RESULT } from './ActionTypes'

export const setUrerLists = (userList: ListTileModel[]) => ({
  type: USERS_LIST,
  payload: userList
})

export const setFilterResult = (filterResult: ListTileModel[]) => ({
  type: FILTER_RESULT,
  payload: filterResult
})
