import { FunctionComponent } from 'react'
import ListTileModel from '../../Models/ListTileModel'

import './ListTile.scss'

const ListTile: FunctionComponent<ListTileModel> = ({
  id,
  name,
  created_at,
  updated_at,
  action
}) => {
  return (
    <div className="list-tile" onClick={() => action(id)}>
      <h4>{name}</h4>
      <h6>Created at: {created_at}</h6>
      <h6>last update: {updated_at}</h6>
    </div>
  )
}

export default ListTile
