import {getYear, isBefore} from 'date-fns'

import {defaultOptions, FiscalFnsOptions} from '../support/options'

export function startOfFiscalYear(date: Date | string, dirtyOptions: FiscalFnsOptions = {}){
  const options = defaultOptions(dirtyOptions)

  let year = getYear(date)

  let thisYearStart = new Date(year, options.startMonth, options.startDay)

  if(isBefore(date, thisYearStart)){
    year = year - 1
  }

  return new Date(year, options.startMonth, options.startDay, 0, 0, 0)
}
