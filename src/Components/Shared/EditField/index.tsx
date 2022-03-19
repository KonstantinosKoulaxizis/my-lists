import { FunctionComponent } from 'react'

import EditFieldModel from '../../../Models/EditFieldModel'

import './EditField.scss'

const EditField: FunctionComponent<EditFieldModel> = ({ text, shouldEdit }) => {
  return (
    <>
      <textarea readOnly={!shouldEdit} className={shouldEdit ? 'edit-mode' : ''} value={text} />
    </>
  )
}

export default EditField
