import { FunctionComponent } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

import DeleteButtonModel from '../../Models/DeleteButtonModel'

import './DeleteButton.scss'

const DeleteButton: FunctionComponent<DeleteButtonModel> = ({ text, buttonAction }) => {
  return (
    <button
      className={`delete-button${text ? ' delete-button-text' : ' delete-button-round'}`}
      onClick={buttonAction}>
      <span>
        <FaTrashAlt />
      </span>
      {!!text && <span>Delete task</span>}
    </button>
  )
}

export default DeleteButton
