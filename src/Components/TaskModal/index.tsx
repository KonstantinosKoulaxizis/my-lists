import { FunctionComponent, memo, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import TaskModalModel from '../../Models/TaskModalModel'
import { GeneralUtils } from '../../Utils/GeneralUtils'
import { setSelectedTask } from '../../Store/Actions/ListActions'
import { useReduxDispatch } from '../../Utils/ReduxHooks'

import EditField from '../Shared/EditField'

import './TaskModal.scss'

const TaskModal: FunctionComponent<TaskModalModel> = memo(
  ({ task, list, selectedTask, getTaskAction }) => {
    const navigate = useNavigate()
    const dispatch = useReduxDispatch()
    const _setSelectedTask = useCallback(
      selected => dispatch(setSelectedTask(selected)),
      [dispatch]
    )

    const handleCloseModal = () => {
      if (!list) return
      _setSelectedTask({})
      navigate(`../list/${list}`)
    }

    useEffect(() => {
      if (task) {
        getTaskAction(task)
      }
    }, [getTaskAction, task])

    return (
      <div id="task-modal-content">
        <div id="modal-back-container">
          <button id="modal-back-button" onClick={handleCloseModal}>
            x
          </button>
        </div>
        <hr />
        <EditField text={selectedTask.name} shouldEdit={false} />
        <hr />
        <div id="task-item-date">
          <h6>Created at: {GeneralUtils.getFromNow(selectedTask.created_at)}</h6>
          <h6>last update: {GeneralUtils.getFromNow(selectedTask.updated_at)}</h6>
        </div>
        <hr />
        <div id="task-edit-container">
          <button> edit button</button>
        </div>
      </div>
    )
  }
)

export default TaskModal
