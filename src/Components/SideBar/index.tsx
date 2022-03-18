import { useEffect, useCallback } from 'react'

import { ListRequests } from '../../Utils/ListRequests'
import { useReduxSelector, useReduxDispatch } from '../../Utils/ReduxHooks'
import ListTileModel from '../../Models/ListTileModel'
import { setUrerLists } from '../../Store/Actions/ListActions'

import CreateNewButton from '../CreateNewButton'
import UserLists from './UserLists'

import './SideBar.scss'

const SideBar = () => {
  const dispatch = useReduxDispatch()
  const setLists = useCallback(value => dispatch(setUrerLists(value)), [dispatch])
  const userLists: ListTileModel[] = useReduxSelector(state => state.lists.userList)

  const handleGetALlLists = useCallback(async () => {
    const lists = await ListRequests.getAllLists()
    setLists([
      ...lists.data,
      ...lists.data,
      ...lists.data,
      ...lists.data,
      ...lists.data,
      ...lists.data
    ])
  }, [setLists])

  useEffect(() => {
    handleGetALlLists()
  }, [handleGetALlLists])
  return (
    <div id="side-bar-container">
      <div id="buttons-container">
        <CreateNewButton />
        <button> edit button</button>
      </div>
      <br />
      Search <br />
      <UserLists userLists={userLists} />
    </div>
  )
}

export default SideBar
