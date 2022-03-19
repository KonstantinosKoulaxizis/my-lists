import RequestFunction from './RequestFunction'
import { GET_METHOD, POST_METHOD, PATCH_METHOD, DELETE_METHOD } from '../Consts/RequestConsts'
import { COMPLETED_KEY, NAME_KEY } from '../Consts/AppConsts'

export const ListRequests = (() => {
  return {
    // ===== GET requests =====>
    getAllLists: async () => {
      return await RequestFunction('list', GET_METHOD)
    },
    getList: async (id: string) => {
      return await RequestFunction(`list/${id}`, GET_METHOD)
    },
    getTask: async (list: string, task: string) => {
      return await RequestFunction(`list/${list}/${task}`, GET_METHOD)
    },
    // ===== POST requests =====>
    postList: async (name: string) => {
      const body = JSON.stringify({
        name: name
      })
      return await RequestFunction('list', POST_METHOD, body)
    },
    postTask: async (list: string, name: string) => {
      const body = JSON.stringify({
        name: name
      })
      return await RequestFunction(`list/${list}`, POST_METHOD, body)
    },
    // ===== PATCH requests =====>
    updateList: async (list: string, name: string) => {
      const body = JSON.stringify({
        name: name
      })
      return await RequestFunction(`list/${list}`, PATCH_METHOD, body)
    },
    updateTask: async (list: string, task: string, value: string | boolean, objKey: string) => {
      const allowedKeys = [COMPLETED_KEY, NAME_KEY]

      if (!allowedKeys.some(v => v === objKey)) return

      const body = JSON.stringify({
        [objKey]: value
      })

      return await RequestFunction(`list/${list}/${task}`, PATCH_METHOD, body)
    },
    // ===== DELETE requests =====>
    deleteList: async (id: string) => {
      return await RequestFunction(`list/${id}`, DELETE_METHOD)
    },
    deleteTask: async (list: string, task: string) => {
      return await RequestFunction(`list/${list}/${task}`, DELETE_METHOD)
    }
  }
})()
