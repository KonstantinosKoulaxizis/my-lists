import { FunctionComponent } from 'react'

import ListItemModel from '../../Models/ListItemModel'
// import { GeneralUtils } from '../../Utils/GeneralUtils'

import './ListItemTile.scss'

const ListItemTile: FunctionComponent<ListItemModel> = ({
  id,
  name,
  navigationAction,
  changeStatusAction,
  completed
}) => {
  return (
    <div className="list-item-tile">
      <div>
        <div className="list-item-task">
          <h4 onClick={() => navigationAction(id)}>{name}</h4>
          <div className="task-status">
            <input
              type="checkbox"
              id="scales"
              name="scales"
              checked={completed}
              onChange={() => changeStatusAction(id, !completed)}
            />
          </div>
        </div>
        {/* <hr />
        <div className="list-item-date">
          <h6>Created at: {GeneralUtils.getFromNow(created_at)}</h6>
          <h6>last update: {GeneralUtils.getFromNow(updated_at)}</h6>
        </div> */}
      </div>
    </div>
  )
}

export default ListItemTile
