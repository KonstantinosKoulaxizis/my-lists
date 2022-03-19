import { FunctionComponent } from 'react'

import ListTileModel from '../../Models/ListTileModel'
import { GeneralUtils } from '../../Utils/GeneralUtils'

import './ListTile.scss'

const ListTile: FunctionComponent<ListTileModel> = ({
  id,
  name,
  created_at,
  updated_at,
  isActive,
  navigationAction
}) => {
  return (
    <div
      className={`list-tile${isActive ? ' active-item-status' : ''}`}
      onClick={() => navigationAction(id)}>
      <h4>{name}</h4>
      <hr />
      <div className="list-tile-date">
        <h6>Created at: {GeneralUtils.getFromNow(created_at)}</h6>
        <h6>last update: {GeneralUtils.getFromNow(updated_at)}</h6>
      </div>
    </div>
  )
}

export default ListTile
