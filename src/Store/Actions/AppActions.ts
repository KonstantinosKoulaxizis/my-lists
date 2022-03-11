import { IS_AUTH } from './ActionTypes'

export const setIsAuth = (isAuth: boolean) => ({
  type: IS_AUTH,
  payload: isAuth
})
