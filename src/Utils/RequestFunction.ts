import { GeneralUtils } from './GeneralUtils'

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
      Authorization: `Bearer ${localStorage.getItem('we_do_token:')}` // TODO change with cookies
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
