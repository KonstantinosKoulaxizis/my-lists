import { useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'

import { useReduxSelector, useReduxDispatch } from '../../Utils/ReduxHooks'
import ListTileModel from '../../Models/ListTileModel'
import SelectedListModel from '../../Models/SelectedListModel'
import { setSelectedList } from '../../Store/Actions/ListActions'
import { ListRequests } from '../../Utils/ListRequests'

import LoadedList from '../../Components/LoadedList'
import TaskModal from '../../Components/TaskModal'
import SideBar from '../../Components/SideBar'
import BottomBar from './BottomBar'

import './List.scss'

const List = () => {
  const { id, task } = useParams()
  console.log('🚀 ~ file: index.tsx ~ line 19 ~ List ~ task', task)
  const dispatch = useReduxDispatch()
  const _setSelectedList = useCallback(selected => dispatch(setSelectedList(selected)), [dispatch])
  const userLists: ListTileModel[] = useReduxSelector(state => state.lists.userList)
  const selectedList: SelectedListModel = useReduxSelector(state => state.lists.selectedList)

  const handleGetList = async (listId: string) => {
    if (id === selectedList?.id?.toString()) {
      return
    }
    const found = userLists.find(l => l.id === listId)

    if (found) {
      _setSelectedList(found)
      return
    }
    const fetchedList = await ListRequests.getList(listId)

    if (fetchedList?.data) {
      _setSelectedList(fetchedList.data)
    }
  }

  return (
    <>
      <div id="main-view-container">
        <div id="side-bar">
          <SideBar />
        </div>

        <div id="list-view">
          <LoadedList selectedList={selectedList} id={id} getListAction={handleGetList} />
        </div>

        <div id="task-modal" className={!!task ? 'active-task-modal' : 'hidden-task-modal'}>
          {/* <TaskModal /> */}
        </div>
      </div>
      <div id="mobile-footer">
        <BottomBar />
      </div>
    </>
  )
}

export default List
