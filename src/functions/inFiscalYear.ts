import {FiscalFnsOptions, defaultOptions} from '../support/options'
import {startOfFiscalYear} from './startOfFiscalYear'

import {isEqual} from 'date-fns'

export function inFiscalYear(date: Date | string, startDate: Date, dirtyOptions: FiscalFnsOptions = {}){
  let options = defaultOptions(dirtyOptions)


  return isEqual(startDate, startOfFiscalYear(date, options))
}