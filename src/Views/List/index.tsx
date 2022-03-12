import SideBar from '../../Components/SideBar'
import BottomBar from '../../Components/BottomBar'

import './List.scss'

const List = () => {
  return (
    <>
      <div id="main-view-container">
        <div id="side-bar">
          <SideBar />
        </div>

        <div id="list-view">Lists</div>
      </div>
      <div id="mobile-footer">
        <BottomBar />
      </div>
    </>
  )
}

export default List
