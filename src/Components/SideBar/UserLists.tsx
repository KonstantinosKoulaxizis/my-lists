import { FunctionComponent } from 'react'
import ListTileModel from '../../Models/ListTileModel'

import ListTile from '../ListTile'

const UserLists: FunctionComponent<{ userLists: ListTileModel[] }> = ({ userLists }) => {
  return (
    <ul id="side-bar-list">
      {userLists.map(listItem => (
        <ListTile
          _id={listItem._id}
          name={listItem.name}
          created_at={listItem.created_at}
          updated_at={listItem.updated_at}
        />
      ))}
    </ul>
  )
}

export default UserLists
