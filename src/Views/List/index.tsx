import { useCallback } from 'react'
import { useParams } from 'react-router-dom'

import { useReduxSelector, useReduxDispatch } from '../../Utils/ReduxHooks'
import SelectedListModel from '../../Models/SelectedListModel'
import SelectedTaskModel from '../../Models/SelectedTaskModel'
import { setSelectedList, setSelectedTask } from '../../Store/Actions/ListActions'
import { ListRequests } from '../../Utils/ListRequests'

import LoadedList from '../../Components/LoadedList'
import TaskModal from '../../Components/TaskModal'
import SideBar from '../../Components/SideBar'

import './List.scss'

const List = () => {
  const { id, task } = useParams()
  const dispatch = useReduxDispatch()
  const _setSelectedList = useCallback(selected => dispatch(setSelectedList(selected)), [dispatch])
  const _setSelectedTask = useCallback(selected => dispatch(setSelectedTask(selected)), [dispatch])
  const selectedList: SelectedListModel = useReduxSelector(state => state.lists.selectedList)
  const selectedTask: SelectedTaskModel = useReduxSelector(state => state.lists.selectedTask)

  // TODO remove to string

  const handleGetList = async (listId: string) => {
    if (!id || id === selectedList?.id?.toString()) {
      return
    }

    const fetchedList = await ListRequests.getList(listId)

    if (fetchedList?.data) {
      _setSelectedList(fetchedList.data)
    }
  }

  const handleSelectTask = async (taskId: string) => {
    if (!task || task === selectedTask?.id?.toString()) {
      return
    }
    const found = selectedList?.items?.length
      ? selectedList.items.find(t => t.id.toString() === taskId)
      : false

    if (found) {
      _setSelectedTask(found)
      return
    }
  }

  return (
    <>
      <div id="main-view-container">
        <div id="side-bar">
          <SideBar />
        </div>

        <div id="list-view">
          <LoadedList
            selectedList={selectedList}
            selectedTask={selectedTask}
            id={id}
            getListAction={handleGetList}
          />
        </div>

        <div id="task-modal" className={!!task ? 'active-task-modal' : 'hidden-task-modal'}>
          <TaskModal
            task={task}
            list={id}
            selectedTask={selectedTask}
            selectedList={selectedList}
            getTaskAction={handleSelectTask}
          />
        </div>
      </div>
    </>
  )
}

export default List
