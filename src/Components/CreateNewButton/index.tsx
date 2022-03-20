import { FunctionComponent, useState } from 'react'
import { FaPlusSquare, FaSave, FaWindowClose } from 'react-icons/fa'

import CreateNewButtonModel from '../../Models/CreateNewButtonModel'
import { LIST_TYPE, TASK_TYPE } from '../../Consts/AppConsts'
import { ListRequests } from '../../Utils/ListRequests'
import { ReduxUpdateUtils } from '../../Utils/ReduxUpdateUtils'

import './CreateNewButton.scss'

const CreateNewButton: FunctionComponent<CreateNewButtonModel> = ({ newType, listId }) => {
  const [showField, setShowField] = useState(false)
  const [newValue, setNewValue] = useState('')

  const handleUpdatedValue = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setNewValue(e.currentTarget.value)
  }

  const handleCloseField = () => {
    setNewValue('')
    setShowField(false)
  }

  const handleShowField = () => {
    setShowField(!showField)
  }

  const handleAddNew = async () => {
    if (!newValue.length) return

    if (!listId && newType === LIST_TYPE) {
      const newList = await ListRequests.postList(newValue)

      if (!!newList?.data) {
        ReduxUpdateUtils.addList(newList.data)
      }
    } else if (listId && newType === TASK_TYPE) {
      const newTask = await ListRequests.postTask(listId as string, newValue)

      if (!!newTask?.data) {
        ReduxUpdateUtils.addTask(newTask.data)
      }
    }

    handleCloseField()
  }

  return (
    <div className="create-new-container">
      {showField ? (
        <div>
          <div className="icon-buttons-container">
            <button onClick={handleCloseField} className="red-button">
              <FaWindowClose />
            </button>
            <button onClick={handleAddNew} className="blue-button">
              <FaSave />
            </button>
          </div>
          <div>
            <textarea rows={6} value={newValue} onChange={handleUpdatedValue} />
          </div>
        </div>
      ) : (
        <button className="blue-button" onClick={handleShowField}>
          <span>
            <FaPlusSquare />
          </span>
          <span>New {!!listId ? 'task' : 'list'}</span>
        </button>
      )}
    </div>
  )
}

export default CreateNewButton
