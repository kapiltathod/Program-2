/*function fibonacci(x) {
  const series = []
  let f1 = 0, f2 = 1;
  series.push(f1)
  for (let i = 1; i <= x; i++) {
    series.push(f2)
    let next = f1 + f2;
    f1 = f2;
    f2 = next;
  }
  return series
}

const result = fibonacci(100);
console.log(result.toString())*/


class fibonacciSeries {
  constructor(inputNumber) {
    this.number = inputNumber;
  }

  run() {
    const series = []
    let f1 = 0, f2 = 1;
    series.push(f1)
    for (let i = 1; i <= this.number; i++) {
      series.push(f2)
      let next = f1 + f2;
      f1 = f2;
      f2 = next;
    }
    return series.toString();
  }
}

const fibonacci = new fibonacciSeries(100);
console.log(fibonacci.run());