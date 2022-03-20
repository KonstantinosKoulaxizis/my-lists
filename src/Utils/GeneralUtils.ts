import moment from 'moment'
import { Store, NOTIFICATION_TYPE } from 'react-notifications-component'

export const GeneralUtils = (() => {
  return {
    getFromNow: (time: string) => {
      return moment(time).fromNow()
    },
    updateInArray: (arrToCheck: any[], newObj: any, keyToCheck: string) => {
      const arrCoppy = [...arrToCheck]
      const found = arrToCheck.findIndex(el => el?.[keyToCheck] === newObj?.[keyToCheck])

      if (found > -1) {
        arrCoppy[found] = newObj
      }
      return arrCoppy
    },
    showNotification: (msg: string, notificationType: NOTIFICATION_TYPE) => {
      Store.addNotification({
        title: msg,
        type: notificationType,
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 1800
        }
      })
    }
  }
})()
