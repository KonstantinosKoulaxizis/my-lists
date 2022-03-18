import SelectedListModel from './SelectedListModel'

interface LoadedListModel {
  selectedList: SelectedListModel
  id: string | undefined
  getListAction: (id: string) => void
}

export default LoadedListModel
