export class Statistics {
  private dataSeries: number[]

  public get max(): number {
    const max = this.selectNumberAccordingToFilter((x, y) => { return x > y })
    return max
  }

  private selectNumberAccordingToFilter(filter: (x: number, y: number) => boolean): number {
    let selectedValue = this.selectFirstValueIfPossible()
    this.dataSeries.forEach(number => {
      if (filter(number,  selectedValue)) {
        selectedValue = number
      }
    });
    return selectedValue
  }

  private selectFirstValueIfPossible() {
    return this.dataSeries.length > 0 ? this.dataSeries[0] : 0
  }

  public get min(): number {
    const min = this.selectNumberAccordingToFilter((x, y) => { return x < y })
    return min
  }

  public get sum(): number {
    let sum = 0
    this.dataSeries.forEach(number => {
      sum += number
    });
    return sum
  }

  public get average(): number {
    if (this.dataSeries.length > 0) {
      return this.sum / this.dataSeries.length
    } else {
      return 0
    }
  }

  constructor(dataSeries: number[]) {
    this.dataSeries = dataSeries
  }
}
