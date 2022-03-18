interface TaskModalModel {
    id: string // TODO CHANGE IT WITH _id
    name: string
    navigationAction: (_id: string) => void
    changeStatusAction: (_id: string, status: boolean) => void
    completed: boolean
  }
  
  export default TaskModalModel
  