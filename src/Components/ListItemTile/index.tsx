import { FunctionComponent } from 'react'
import ListItemModel from '../../Models/ListItemModel'

import './ListItemTile.scss'

const ListItemTile: FunctionComponent<ListItemModel> = ({
  id,
  name,
  created_at,
  updated_at,
  action,
  completed
}) => {
  return (
    <div className="list-item-tile">
      <h4>{name}</h4>
      <h6>Created at: {created_at}</h6>
      <h6>last update: {updated_at}</h6>
    </div>
  )
}

export default ListItemTile
