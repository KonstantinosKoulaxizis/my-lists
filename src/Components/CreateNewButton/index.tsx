import { FaPlusSquare } from 'react-icons/fa'

import StateButton from '../Shared/StateButton'

const CreateNewButton = () => {
  const handleAddNew = () => {
    console.log('added')
  }
  return (
    <StateButton text="add new" icon={<FaPlusSquare />} activeState={false} action={handleAddNew} />
  )
}

export default CreateNewButton
