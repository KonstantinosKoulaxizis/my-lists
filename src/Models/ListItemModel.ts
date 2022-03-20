interface ListItemModel {
  id: string
  name: string
  isActive: boolean
  navigationAction: (_id: string) => void
  changeStatusAction: (_id: string, status: boolean) => void
  completed: boolean
}

export default ListItemModel
