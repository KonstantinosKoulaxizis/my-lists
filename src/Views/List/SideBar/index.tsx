import { useEffect } from 'react'
import { ListRequests } from '../../../Utils/ListRequests'

import CreateNewButton from '../../../Components/CreateNewButton'

import './SideBar.scss'

const SideBar = () => {
  const handleGetALlLists = async () => {
    const lists = await ListRequests.getAllLists()
    console.log('🚀 ~ file: index.tsx ~ line 12 ~ handleGetALlLists ~ lists', lists)
  }

  useEffect(() => {
    handleGetALlLists()
  }, [])
  return (
    <div id="side-bar-container">
      <div id="buttons-container">
        <CreateNewButton />
        <button> edit button</button>
      </div>
      <br />
      Search <br />
      ===== <br />
      result <br />
      ===== <br />
    </div>
  )
}

export default SideBar
