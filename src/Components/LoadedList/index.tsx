import { FunctionComponent, memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import LoadedListModel from '../../Models/LoadedListModel'
import ListItemTile from '../ListItemTile'

import './LoadedList.scss'

const LoadedList: FunctionComponent<LoadedListModel> = memo(
  ({ selectedList, id, getListAction }) => {
    const navigate = useNavigate()

    const handleNavigateToList = (id: string) => {
      if (!selectedList?.id) return

      navigate(`../list/${selectedList.id}/${id}`)
    }

    const handleUpdateTaskStatus = (id: string, status: boolean) => {
      console.log('id: ', id, 'status: ', status)
    }

    useEffect(() => {
      if (id) {
        getListAction(id)
      }
    }, [getListAction, id])

    return (
      <div>
        {selectedList?.id ? (
          <div>
            <div id="list-header">
              <h2>{selectedList.name}</h2>
              <hr />
            </div>
            <div id="list-children">
              {selectedList?.items?.length > 0 ? (
                <>
                  {selectedList.items.map(item => (
                    <ListItemTile
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      navigationAction={handleNavigateToList}
                      changeStatusAction={handleUpdateTaskStatus}
                      completed={item.completed}
                    />
                  ))}
                </>
              ) : (
                <h1>No items</h1>
              )}
            </div>
          </div>
        ) : (
          <h1>Select a list or create a new one</h1>
        )}
      </div>
    )
  }
)

export default LoadedList
