import { FunctionComponent } from 'react'

import EditFieldModel from '../../../Models/EditFieldModel'

import './EditField.scss'

const EditField: FunctionComponent<EditFieldModel> = ({ text, shouldEdit, largeFonts }) => {
  return (
    <textarea
      readOnly={!shouldEdit}
      className={`${largeFonts ? 'text-x-large-fonts' : ''}${shouldEdit ? ' edit-mode' : ''}`}
      value={text}
    />
  )
}

export default EditField
