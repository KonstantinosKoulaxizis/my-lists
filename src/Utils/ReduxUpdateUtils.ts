import { GeneralUtils } from './GeneralUtils'
import { setUrerLists, setSelectedList, setSelectedTask } from '../Store/Actions/ListActions'

import ListTileModel from '../Models/ListTileModel'
import SelectedTaskModel from '../Models/SelectedTaskModel'

import store from '../index'

export const ReduxUpdateUtils = (() => {
  return {
    updateLists: (updatedList: ListTileModel) => {
      const userLists = store.getState().lists?.userLists || []
      const updatedListsArray = GeneralUtils.updateInArray(userLists, updatedList, 'id')

      store.dispatch(setUrerLists(updatedListsArray))
      store.dispatch(setSelectedList(updatedList))
      GeneralUtils.showNotification('List updated!', 'success')
    },
    updateListTasks: (updatedTask: SelectedTaskModel) => {
      const selectedList = store.getState().lists?.selectedList

      const updatedTasks = GeneralUtils.updateInArray(selectedList?.items || [], updatedTask, 'id')

      selectedList.items = updatedTasks
      store.dispatch(setSelectedList({ ...selectedList }))
      GeneralUtils.showNotification('Task updated!', 'success')
    },
    removeList: (id: string) => {
      const userLists = store.getState().lists?.userLists || []
      const remaining = userLists.filter((l: ListTileModel) => l.id !== id)

      store.dispatch(setUrerLists(remaining))
      store.dispatch(setSelectedList({} as ListTileModel))
      GeneralUtils.showNotification('List deleted!', 'success')
    },
    removeTask: (id: string) => {
      const selectedList = store.getState().lists?.selectedList

      selectedList.items = selectedList.items.filter((t: SelectedTaskModel) => t.id !== id)
      store.dispatch(setSelectedList({ ...selectedList }))
      store.dispatch(setSelectedTask({} as SelectedTaskModel))
      GeneralUtils.showNotification('Task deleted!', 'success')
    },
    addList: (list: ListTileModel) => {
      const userLists = store.getState().lists?.userLists || []

      store.dispatch(setUrerLists([list, ...userLists]))
      GeneralUtils.showNotification('New list created!', 'success')
    },
    addTask: (task: SelectedTaskModel) => {
      const selectedList = store.getState().lists?.selectedList
      selectedList.items = [task, ...selectedList.items]

      store.dispatch(setSelectedList({ ...selectedList }))
      GeneralUtils.showNotification('New task added!', 'success')
    }
  }
})()
