import { FunctionComponent } from 'react'
import { FaEdit, FaWindowClose } from 'react-icons/fa'

import EditButtonModel from '../../Models/EditButtonModel'

import './EditButton.scss'

const EditButton: FunctionComponent<EditButtonModel> = ({ text, activeState, buttonAction }) => {
  return (
    <button
      className={`edit-button${text ? ' edit-button-text' : ' edit-button-round'}${
        activeState ? ' edit-button-active' : ' edit-button-inaactive'
      }`}
      onClick={buttonAction}>
      <span>{activeState ? <FaWindowClose /> : <FaEdit />}</span>
      {!!text && <span className="state-button-text">{activeState ? 'Close' : 'Edit task'}</span>}
    </button>
  )
}

export default EditButton
