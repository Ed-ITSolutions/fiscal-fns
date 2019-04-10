import {FiscalFnsOptions, defaultOptions} from '../support/options'
import {endOfFiscalYear} from './endOfFiscalYear'

export function fiscalYear(year: number, dirtyOptions: FiscalFnsOptions = {}){
  let options = defaultOptions(dirtyOptions)

  const start = new Date(year, options.startMonth, options.startDay, 0, 0, 0)
  const end = endOfFiscalYear(start)

  return {start, end}
}