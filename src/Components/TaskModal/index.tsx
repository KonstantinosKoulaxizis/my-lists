import { FunctionComponent, memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import TaskModalModel from '../../Models/TaskModalModel'

import './TaskModal.scss'

const TaskModal: FunctionComponent<TaskModalModel> = memo(
  ({ task, list, selectedTask, getTaskAction }) => {
    const navigate = useNavigate()

    const handleCloseModal = () => {
      if (!list) return

      navigate(`../list/${list}`)
    }
    useEffect(() => {
      if (task) {
        getTaskAction(task)
      }
    }, [getTaskAction, task])
    return (
      <div>
        <button onClick={handleCloseModal}>back</button>
        <h2>TaskModal</h2>
        <p>{selectedTask.name}</p>
      </div>
    )
  }
)

export default TaskModal
