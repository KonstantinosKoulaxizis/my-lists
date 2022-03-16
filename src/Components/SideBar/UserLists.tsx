import { FunctionComponent } from 'react'
import ListTileModel from '../../Models/ListTileModel'

import ListTile from '../ListTile'

const UserLists: FunctionComponent<ListTileModel[]> = (userList: ListTileModel[]) => {
  return (
    <ul>
      {userList.map(listItem => (
        <ListTile
          _id={listItem._id}
          name={listItem.name}
          created_at={listItem.created_at}
          updated_at={listItem.updated_at}
        />
      ))}
      <li>test 1</li>
    </ul>
  )
}

export default UserLists
