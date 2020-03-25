export class Statistics {
  private dataSeries: number[]

  public get max(): number {
    return this.dataSeries.length > 0 ? this.dataSeries[0] : 0
  }

  public get min(): number {
    return this.dataSeries.length > 0 ? this.dataSeries[0] : 0
  }

  public get sum(): number {
    let sum = 0
    this.dataSeries.forEach(number => {
      sum += number
    });
    return sum
  }

  public get average(): number {
    return this.dataSeries.length > 0 ? this.dataSeries[0] : 0
  }

  constructor(dataSeries: number[]) {
    this.dataSeries = dataSeries
  }
}
