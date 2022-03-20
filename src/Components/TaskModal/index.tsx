import { FunctionComponent, memo, useEffect, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { NAME_KEY } from '../../Consts/AppConsts'
import { setSelectedTask } from '../../Store/Actions/ListActions'
import { GeneralUtils } from '../../Utils/GeneralUtils'
import { ListRequests } from '../../Utils/ListRequests'
import { useReduxDispatch } from '../../Utils/ReduxHooks'
import { ReduxUpdateUtils } from '../../Utils/ReduxUpdateUtils'
import TaskModalModel from '../../Models/TaskModalModel'

import EditField from '../EditField'
import EditButton from '../EditButton'
import DeleteButton from '../DeleteButton'

import './TaskModal.scss'

const TaskModal: FunctionComponent<TaskModalModel> = memo(
  ({ task, list, selectedTask, getTaskAction }) => {
    const navigate = useNavigate()
    const dispatch = useReduxDispatch()
    const _setSelectedTask = useCallback(s => dispatch(setSelectedTask(s)), [dispatch])
    const [editTask, setEditTask] = useState(false)

    const handleChangeEditTask = () => {
      setEditTask(!editTask)
    }

    const handleCloseModal = () => {
      if (!list) return
      _setSelectedTask({})
      navigate(`../list/${list}`)
    }

    const handleUpdateTask = async (newName: string) => {
      if (!task || !list || !editTask || !newName || newName === selectedTask.name) return
      const updatedTask = await ListRequests.updateTask(list!, task!, newName, NAME_KEY)

      handleChangeEditTask()

      if (!!updatedTask?.data) {
        ReduxUpdateUtils.updateListTask(updatedTask.data)
      }
      handleCloseModal()
    }

    const handleDeleteTask = async () => {
      if (!task || !list) return

      await ListRequests.deleteTask(list!, task!)

      ReduxUpdateUtils.removeList(task)
      handleCloseModal()
    }

    useEffect(() => {
      if (task) {
        getTaskAction(task)
      }
      setEditTask(false)
    }, [getTaskAction, task])

    return (
      <div id="task-modal-content">
        <div id="modal-back-container">
          <button id="modal-back-button" onClick={handleCloseModal}>
            x
          </button>
        </div>
        <hr />
        <EditField
          text={selectedTask.name}
          shouldEdit={editTask}
          largeFonts={false}
          updateAction={handleUpdateTask}
        />
        <hr />
        <div id="task-item-date">
          <h6>Created at: {GeneralUtils.getFromNow(selectedTask.created_at)}</h6>
          <h6>last update: {GeneralUtils.getFromNow(selectedTask.updated_at)}</h6>
        </div>
        <hr />
        <div id="task-edit-container">
          <EditButton text activeState={editTask} buttonAction={handleChangeEditTask} />
          <DeleteButton text buttonAction={handleDeleteTask} />
        </div>
      </div>
    )
  }
)

export default TaskModal
