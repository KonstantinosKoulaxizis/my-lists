interface ListItemModel {
  id: string // TODO CHANGE IT WITH _id
  name: string
  isActive: boolean
  navigationAction: (_id: string) => void
  changeStatusAction: (_id: string, status: boolean) => void
  completed: boolean
}

export default ListItemModel
