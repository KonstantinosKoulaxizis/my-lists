interface ListItemModel {
  id: string // TODO CHANGE IT WITH _id
  name: string
  created_at: string
  updated_at: string
  action: (_id: string) => void
  completed: boolean
}

export default ListItemModel
