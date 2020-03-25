export class Statistics {
  private dataSeries: number[]

  public get max(): number {
    let maximum = this.dataSeries.length > 0 ? this.dataSeries[0] : 0
    this.dataSeries.forEach(number => {
      if (number > maximum) {
        maximum = number
      }
    });
    return maximum
  }

  public get min(): number {
    let minimum = this.dataSeries.length > 0 ? this.dataSeries[0] : 0
    this.dataSeries.forEach(number => {
      if (number < minimum) {
        minimum = number
      }
    });
    return minimum
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
