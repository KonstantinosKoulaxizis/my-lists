import SelectedTaskModel from './SelectedTaskModel'
interface TaskModalModel {
  task: string | undefined
  list: string | undefined
  selectedTask: SelectedTaskModel
  getTaskAction: (taskId: string) => void
}

export default TaskModalModel
