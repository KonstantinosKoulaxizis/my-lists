import { GeneralUtils } from './GeneralUtils'
import { setUrerLists, setSelectedList } from '../Store/Actions/ListActions'

import ListTileModel from '../Models/ListTileModel'
import SelectedTaskModel from '../Models/SelectedTaskModel'

import store from '../index'

export const ReduxUpdateUtils = (() => {
  return {
    updateLists: (updatedList: ListTileModel) => {
      const userLists = store.getState().lists?.userLists
      const updatedListsArray = GeneralUtils.updateInArray(userLists, updatedList, 'id')

      store.dispatch(setUrerLists(updatedListsArray))
      store.dispatch(setSelectedList(updatedList))
    },
    updateListTasks: (updatedTask: SelectedTaskModel) => {
      const selectedList = store.getState().lists?.selectedList

      const updatedTasks = GeneralUtils.updateInArray(selectedList?.items || [], updatedTask, 'id')

      selectedList.items = updatedTasks
      store.dispatch(setSelectedList(selectedList))
    }
  }
})()
