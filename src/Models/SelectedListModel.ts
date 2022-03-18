interface SelectedListModel {
  id: string // TODO CHANGE IT WITH _id
  name: string
  created_at: string
  updated_at: string
  navigationAction: (_id: string) => void
  items: any[] //TODO CHANGE WITH intercae
}

export default SelectedListModel
