import { GeneralUtils } from './GeneralUtils'
import { CookieUtils } from './CookieUtils'
import { ACCESS_TOKEN } from '../Consts/AppConsts'

const RequestFunction = async (path: string, method: string, body?: any, auth?: boolean) => {
  const baseUrl = process.env.REACT_APP_API_SERVER
  let headers
  if (!auth) {
    headers = {
      'Content-Type': 'application/json'
    }
  } else {
    const head = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
    headers = Object.assign(head, {
      Authorization: `Bearer ${CookieUtils.getCookie(ACCESS_TOKEN)}`
    })
  }
  const options = !!body ? { method, headers, body } : { method, headers }

  try {
    const response = await fetch(`${baseUrl}/${path}`, options)
    const content = await response.json()
    return !!content && !content.error ? content : content.error
  } catch (error) {
    GeneralUtils.showNotification('Something went wrong!', 'danger')
  }
}

export default RequestFunction
