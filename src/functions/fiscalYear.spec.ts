import {fiscalYear} from './fiscalYear'
import {getYear} from 'date-fns'

describe('Fiscal Year', () => {
  it('should get the fiscal year for a given year', () => {
    const {start, end} = fiscalYear(2018)

    expect(getYear(start)).toBe(2018)
    expect(getYear(end)).toBe(2019)
  })
})