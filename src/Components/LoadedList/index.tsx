import { FunctionComponent, memo, useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { ListRequests } from '../../Utils/ListRequests'
import { GeneralUtils } from '../../Utils/GeneralUtils'
import { useReduxSelector, useReduxDispatch } from '../../Utils/ReduxHooks'
import { setUrerLists, setSelectedList } from '../../Store/Actions/ListActions'

import LoadedListModel from '../../Models/LoadedListModel'
import ListTileModel from '../../Models/ListTileModel'
import ListItemTile from '../ListItemTile'
import EditButton from '../EditButton'
import EditField from '../Shared/EditField'
import { COMPLETED_KEY } from '../../Consts/AppConsts'

import './LoadedList.scss'

const LoadedList: FunctionComponent<LoadedListModel> = memo(
  ({ selectedList, id, getListAction, selectedTask }) => {
    const navigate = useNavigate()
    const dispatch = useReduxDispatch()
    const _setUrerLists = useCallback(value => dispatch(setUrerLists(value)), [dispatch])
    const _setSelectedList = useCallback(s => dispatch(setSelectedList(s)), [dispatch])
    const userLists: ListTileModel[] = useReduxSelector(state => state.lists.userList)
    const [editTitle, setEditTitle] = useState(false)

    const handleChangeEditState = () => {
      setEditTitle(!editTitle)
    }

    const handleUpdateListName = async (newName: string) => {
      if (!editTitle || !newName || newName === selectedList.name) return
      const updatedList = await ListRequests.updateList(selectedList.id, newName)

      if (!!updatedList?.data) {
        const updatedListsArray = GeneralUtils.updateInArray(userLists, updatedList.data, 'id')
        selectedList.name = newName

        _setUrerLists(updatedListsArray)
      }
    }

    const handleNavigateToTask = (id: string) => {
      if (!selectedList?.id) return

      navigate(`../list/${selectedList.id}/${id}`)
    }

    const handleUpdateTaskStatus = async (id: string, status: boolean) => {
      const updatedTask = await ListRequests.updateTask(selectedList.id, id, status, COMPLETED_KEY)
      if (updatedTask?.data) {
        const updatedTasksArray = GeneralUtils.updateInArray(
          selectedList.items,
          updatedTask.data,
          'id'
        )

        selectedList.items = updatedTasksArray
        _setSelectedList(selectedList)
      }
    }

    useEffect(() => {
      if (id) {
        getListAction(id)
      }
      setEditTitle(false)
    }, [getListAction, id])

    return (
      <div>
        {selectedList?.id ? (
          <div>
            <div id="list-header">
              <div id="header-container">
                <EditField
                  text={selectedList.name}
                  shouldEdit={editTitle}
                  largeFonts
                  updateAction={handleUpdateListName}
                />

                <EditButton
                  text={false}
                  activeState={editTitle}
                  buttonAction={handleChangeEditState}
                />
              </div>
              <hr />
            </div>
            <div id="list-children">
              {selectedList?.items?.length > 0 ? (
                <>
                  {selectedList.items.map(item => (
                    <ListItemTile
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      navigationAction={handleNavigateToTask}
                      changeStatusAction={handleUpdateTaskStatus}
                      completed={item.completed}
                      isActive={item.id === selectedTask?.id}
                    />
                  ))}
                </>
              ) : (
                <h1>No items</h1>
              )}
            </div>
          </div>
        ) : (
          <h1>Select a list or create a new one</h1>
        )}
      </div>
    )
  }
)

export default LoadedList
