interface ListTileModel {
  id: string
  name: string
  created_at: string
  updated_at: string
  isActive: boolean
  navigationAction: (_id: string) => void
}

export default ListTileModel
