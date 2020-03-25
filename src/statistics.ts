export class Statistics {
  private dataSeries: number[]
  
  public get sum(): number {
    let sum = 0
    this.dataSeries.forEach(number => {
      sum += number
    });
    return sum
  }
  max: number = 0
  min: number = 0
  avg: number = 0

  constructor(dataSeries: number[]) {
    this.dataSeries = dataSeries
    if (dataSeries.length > 0) {
      this.max = dataSeries[0]
      this.min = dataSeries[0]
      this.avg = dataSeries[0]
    }
  }
}
