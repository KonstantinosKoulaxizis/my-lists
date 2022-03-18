import React, { FunctionComponent } from 'react'

import LoadedListModel from '../../Models/LoadedListModel'
import ListItemTile from '../ListItemTile'

import './LoadedList.scss'

const LoadedList: FunctionComponent<LoadedListModel> = React.memo(({ selectedList }) => {
  return (
    <div>
      {selectedList?.id ? (
        <div>
          <div id="list-header">
            <h2>{selectedList.name}</h2>
            <hr />
          </div>
          <div id="list-children">
            {selectedList?.items.map(item => (
              <ListItemTile
                key={item.id}
                id={item.id}
                name={item.name}
                created_at={item.created_at}
                updated_at={item.updated_at}
                action={() => console.log('change')}
                completed={item.completed}
              />
            ))}
          </div>
        </div>
      ) : (
        <h1>Select a list or create a new one</h1>
      )}
    </div>
  )
})

export default LoadedList
