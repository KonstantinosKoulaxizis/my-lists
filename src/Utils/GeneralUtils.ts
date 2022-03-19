import moment from 'moment'

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
    }
  }
})()
