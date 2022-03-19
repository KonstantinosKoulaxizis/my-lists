import { FunctionComponent, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { useReduxDispatch } from '../../Utils/ReduxHooks'
import { setSelectedTask } from '../../Store/Actions/ListActions'
import UserListsModel from '../../Models/UserListsModel'

import ListTile from '../ListTile'

const UserLists: FunctionComponent<UserListsModel> = ({ userLists, selectedListId }) => {
  const navigate = useNavigate()
  const dispatch = useReduxDispatch()
  const _setSelectedTask = useCallback(selected => dispatch(setSelectedTask(selected)), [dispatch])

  const handleNavigateToList = (id: string) => {
    _setSelectedTask({})
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
