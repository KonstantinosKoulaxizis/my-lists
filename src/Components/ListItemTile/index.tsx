import { FunctionComponent } from 'react'

import ListItemModel from '../../Models/ListItemModel'

import './ListItemTile.scss'

const ListItemTile: FunctionComponent<ListItemModel> = ({
  id,
  name,
  isActive,
  navigationAction,
  changeStatusAction,
  completed
}) => {
  return (
    <div className={`list-item-tile${isActive ? ' active-item-status' : ''}`}>
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
      </div>
    </div>
  )
}

export default ListItemTile
