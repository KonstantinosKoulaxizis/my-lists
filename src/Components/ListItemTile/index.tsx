import { FunctionComponent, memo, useState } from 'react'

import ListItemModel from '../../Models/ListItemModel'

import './ListItemTile.scss'

const ListItemTile: FunctionComponent<ListItemModel> = memo(
  ({ id, name, isActive, navigationAction, changeStatusAction, completed }) => {
    const [completedTask, setCompletedTask] = useState(completed)

    const handleChangeCompletedTask = () => {
      setCompletedTask(!completedTask)
      changeStatusAction(id, !completedTask)
    }
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
                checked={completedTask}
                onChange={handleChangeCompletedTask}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
)

export default ListItemTile
