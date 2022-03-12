import LoadedLists from './LoadedList'
import SideBar from './SideBar'
import BottomBar from './BottomBar'

import './List.scss'

const List = () => {
  return (
    <>
      <div id="main-view-container">
        <div id="side-bar">
          <SideBar />
        </div>

        <div id="list-view">
          <LoadedLists />
        </div>
      </div>
      <div id="mobile-footer">
        <BottomBar />
      </div>
    </>
  )
}

export default List
