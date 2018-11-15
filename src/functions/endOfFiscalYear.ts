import {isAfter, getYear, subDays, addYears} from 'date-fns'

import {FiscalFnsOptions, defaultOptions} from '../support/options'

/**
 * Returns the end of the fiscal year (23:59:59 the day before the next fiscal year starts)
 * 
 * @param date The date to test against. Supports `Date` or `string`
 * @param dirtyOptions Options to 
 */
export function endOfFiscalYear(date: Date | string, dirtyOptions: FiscalFnsOptions = {}){
  let options = defaultOptions(dirtyOptions)

  let yearEnd = subDays(new Date(getYear(date), options.startMonth, options.startDay, 23, 59, 59), 1)

  if(isAfter(date, yearEnd)){
    yearEnd = addYears(yearEnd, 1)
  }

  return yearEnd
}