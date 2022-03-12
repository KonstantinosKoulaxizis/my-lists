import CreateNewButton from '../../../Components/CreateNewButton'

import './SideBar.scss'

const SideBar = () => {
  return (
    <div id="side-bar-container">
      <div id='buttons-container'>
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
