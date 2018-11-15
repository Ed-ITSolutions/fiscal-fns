import {endOfFiscalYear} from './endOfFiscalYear'

import {getYear, getMonth} from 'date-fns'

describe('endOfFiscalYear', () => {
  it('should get the end of the fiscal year when the end is next year', () => {
    let date = endOfFiscalYear(new Date(2018, 11 /* Dec */, 10))

    expect(getYear(date)).toBe(2019)
    expect(getMonth(date)).toBe(2)
  })

  it('should get the end of the fiscal year when the end is this year', () => {
    let date = endOfFiscalYear(new Date(2018, 2 /* March */, 10))

    expect(getYear(date)).toBe(2018)
  })
})