import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'

import UserListsModel from '../../Models/UserListsModel'

import ListTile from '../ListTile'

const UserLists: FunctionComponent<UserListsModel> = ({ userLists, selectedListId }) => {
  const navigate = useNavigate()

  const handleNavigateToList = (id: string) => {
    navigate(`../list/${id}`)
  }

  return (
    <ul id="side-bar-list">
      {userLists.map(listItem => (
        <ListTile
          key={listItem.id}
          id={listItem.id}
          name={listItem.name}
          created_at={listItem.created_at}
          updated_at={listItem.updated_at}
          navigationAction={handleNavigateToList}
          isActive={listItem.id === selectedListId}
        />
      ))}
    </ul>
  )
}

export default UserLists
