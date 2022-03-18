import moment from 'moment'

export const GeneralUtils = (() => {
  return {
    getFromNow: (time: string) => {
      return moment(time).fromNow()
    }
  }
})()
