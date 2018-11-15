export type FiscalFnsOptions = Partial<Options>

interface Options{
  /** 
   * The day of the month your fiscal year starts on.
   * 
   * Defaults to 1 (1st of Month).
   */
  startDay: number
  /**
   * The month your fiscal year starts in.
   * 
   * Be aware that this is 0-indexed so 0 = January and 11 = December.
   * 
   * Defaults to 3 (April).
   */
  startMonth: number
}

export function defaultOptions(options: FiscalFnsOptions): Options{
  return {
    startDay: (options.startDay ? options.startDay : 1),
    startMonth: (options.startMonth ? options.startMonth : 3)
  }
}