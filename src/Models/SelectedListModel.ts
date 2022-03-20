import SelectedTaskModel from './ListItemModel'

interface SelectedListModel {
  id: string
  name: string
  created_at: string
  updated_at: string
  navigationAction: (_id: string) => void
  items: SelectedTaskModel[]
}

export default SelectedListModel
