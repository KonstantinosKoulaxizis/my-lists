import { FunctionComponent } from 'react'
import ListTileModel from '../../Models/ListTileModel'

const ListTile: FunctionComponent<ListTileModel> = ({ _id, name, created_at, updated_at }) => {
  console.log('🚀 ~ file: index.tsx ~ line 5 ~ _id', _id)
  return (
    <div>
      <h4>{name}</h4>
      <h6>Created at: {created_at}</h6>
      <h6>last update: {updated_at}</h6>
    </div>
  )
}

export default ListTile
