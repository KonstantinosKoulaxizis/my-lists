import { FunctionComponent } from 'react'

import EditFieldModel from '../../../Models/EditFieldModel'

import './EditField.scss'

const EditField: FunctionComponent<EditFieldModel> = ({ text, shouldEdit }) => {
  console.log('🚀 ~ file: index.tsx ~ line 8 ~ text', text)
  return (
    <>
      <textarea readOnly={!shouldEdit} className={shouldEdit ? 'edit-mode' : ''}>
        {text}
      </textarea>
    </>
  )
}

export default EditField
