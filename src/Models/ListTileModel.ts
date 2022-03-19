interface ListTileModel {
  id: string // TODO CHANGE IT WITH _id
  name: string
  created_at: string
  updated_at: string
  isActive: boolean
  navigationAction: (_id: string) => void
}

export default ListTileModel
