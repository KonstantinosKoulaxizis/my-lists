import { FunctionComponent, memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ListRequests } from '../../Utils/ListRequests'
import { ReduxUpdateUtils } from '../../Utils/ReduxUpdateUtils'
import LoadedListModel from '../../Models/LoadedListModel'
import { COMPLETED_KEY, TASK_TYPE } from '../../Consts/AppConsts'

import ListItemTile from '../ListItemTile'
import EditButton from '../EditButton'
import EditField from '../EditField'
import DeleteButton from '../DeleteButton'
import CreateNewButton from '../CreateNewButton'

import './LoadedList.scss'

const LoadedList: FunctionComponent<LoadedListModel> = memo(
  ({ selectedList, id, getListAction, selectedTask }) => {
    const navigate = useNavigate()
    const [editTitle, setEditTitle] = useState(false)

    const handleChangeEditState = () => {
      setEditTitle(!editTitle)
    }

    const handleNavigateToTask = (id: string) => {
      if (!selectedList?.id) return

      navigate(`../list/${selectedList.id}/${id}`)
    }

    const handleUpdateListName = async (newName: string) => {
      if (!editTitle || !newName || newName === selectedList.name) return
      const updatedList = await ListRequests.updateList(selectedList.id, newName)

      if (!!updatedList?.data) {
        ReduxUpdateUtils.updateLists(updatedList.data)
      }
    }

    const handleUpdateTaskStatus = async (id: string, status: boolean) => {
      const updatedTask = await ListRequests.updateTask(selectedList.id, id, status, COMPLETED_KEY)

      if (!!updatedTask?.data) {
        ReduxUpdateUtils.updateListTasks(updatedTask.data)
      }
    }

    const handleDeleteList = async () => {
      const listId = selectedList.id

      await ListRequests.deleteList(listId)

      ReduxUpdateUtils.removeList(listId)
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
                <DeleteButton text={false} buttonAction={handleDeleteList} />
              </div>
              <hr />
            </div>
            <div id="list-children">
              <div id="add-new-task-container">
                <CreateNewButton listId={selectedList.id} newType={TASK_TYPE} />
              </div>
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
                <div className="center-text">
                  <h1>No items</h1>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="center-text">
            <h1>Select a list or create a new one</h1>
          </div>
        )}
      </div>
    )
  }
)

export default LoadedList
