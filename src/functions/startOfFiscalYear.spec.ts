import {startOfFiscalYear} from './startOfFiscalYear'

import {getYear, getMonth, getDate} from 'date-fns'

describe('startOfFiscalYear', () => {
  it('should get the start of the fiscal year when it is in the current year', () => {
    let date = startOfFiscalYear(new Date(2018, 11 /* Dec */, 1))

    expect(getYear(date)).toBe(2018)
    expect(getMonth(date)).toBe(3)
    expect(getDate(date)).toBe(1)
  })

  it('should get the start of the fiscal year when it is in the previous year', () => {
    let date = startOfFiscalYear(new Date(2018, 2 /* March */, 1))
    
    expect(getYear(date)).toBe(2017)
    expect(getMonth(date)).toBe(3)
    expect(getDate(date)).toBe(1)
  })

  it('should let you set a custom start day/month', () => {
    let date = startOfFiscalYear(new Date(2018, 11 /* Dec */, 20), {
      startDay: 10,
      startMonth: 11
    })

    expect(getYear(date)).toBe(2018)
    expect(getMonth(date)).toBe(11)
    expect(getDate(date)).toBe(10)
  })
})