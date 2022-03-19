import { FunctionComponent, useEffect, useState } from 'react'

import EditFieldModel from '../../../Models/EditFieldModel'
import useDebounce from '../../../Hooks/useDebounce'

import './EditField.scss'

const EditField: FunctionComponent<EditFieldModel> = ({
  text,
  shouldEdit,
  largeFonts,
  updateAction
}) => {
  const [updatedValue, setUpdatedValue] = useState('')
  const debouncedUpdatedValue = useDebounce(updatedValue, 800)

  const handleUpdatedValue = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setUpdatedValue(e.currentTarget.value)
  }

  useEffect(() => {
    updateAction(debouncedUpdatedValue)
  }, [debouncedUpdatedValue, updateAction])

  useEffect(() => {
    setUpdatedValue(text)
  }, [text])

  return (
    <textarea
      readOnly={!shouldEdit}
      className={`${largeFonts ? 'text-x-large-fonts' : 'text-normal-fonts'}${
        shouldEdit ? ' edit-mode' : ''
      }`}
      onChange={handleUpdatedValue}
      value={updatedValue}
    />
  )
}

export default EditField
