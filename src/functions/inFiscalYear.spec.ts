import {inFiscalYear} from './inFiscalYear'
import {startOfFiscalYear} from './startOfFiscalYear'

describe('inFiscalYear', () => {
  it('should return true for dates in the same fiscal year', () => {
    let testDate = new Date(2018, 11 /* Dec */  , 10)

    let result = inFiscalYear(testDate, startOfFiscalYear(testDate))

    expect(result).toBe(true)
  })
})