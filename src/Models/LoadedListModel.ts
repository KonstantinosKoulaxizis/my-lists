import SelectedListModel from './SelectedListModel'
import SelectedTaskModel from './SelectedTaskModel'

interface LoadedListModel {
  selectedList: SelectedListModel
  selectedTask: SelectedTaskModel
  id: string | undefined
  getListAction: (id: string) => void
}

export default LoadedListModel
