import RequestFunction from './RequestFunction'
import { GET_METHOD } from '../Consts/RequestConsts'

export const ListRequests = (() => {
  return {
    getAllLists: async () => {
      return await RequestFunction('list', GET_METHOD)
    },
    getList: async (id: string) => {
      return await RequestFunction(`list/${id}`, GET_METHOD)
    }
  }
})()
