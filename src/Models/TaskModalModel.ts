import SelectedListModel from './SelectedListModel'
import SelectedTaskModel from './SelectedTaskModel'
interface TaskModalModel {
  task: string | undefined
  list: string | undefined
  selectedTask: SelectedTaskModel
  selectedList: SelectedListModel
  getTaskAction: (taskId: string) => void
}

export default TaskModalModel
