import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'

import ListTileModel from '../../Models/ListTileModel'

import ListTile from '../ListTile'

const UserLists: FunctionComponent<{ userLists: ListTileModel[] }> = ({ userLists }) => {
  const navigate = useNavigate()

  const handleNavigateToList = (id: string) => {
    navigate(`../list/${id}`)
  }

  return (
    <ul id="side-bar-list">
      {userLists.map(listItem => (
        <ListTile
          id={listItem.id}
          name={listItem.name}
          created_at={listItem.created_at}
          updated_at={listItem.updated_at}
          action={handleNavigateToList}
        />
      ))}
    </ul>
  )
}

export default UserLists
