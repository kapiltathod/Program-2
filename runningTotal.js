function recurSum (arr, n) {
  let n = arr.length;
  if (n <= 0 ) {
    return 0;
  } else {
    return (recurSum(arr, n - 1) + arr[n - 1]);
  }
}

//console.log(recurSum(), n);

function runningTotal1(arr) {
  let sum = 0, i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  console.log(sum);
}

runningTotal1([1, 2, 3, 4, 5, 6]);

function runningTotal2(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

runningTotal2([1, 2, 3, 4, 5, 6]);


class runningTotal {
  constructor(data) {
    this.array = data;
  }

  run() {
    let sum = 0;
    for (let i = 0; i < this.array.length; i++) {
      sum += this.array[i];
    }
    return sum;
  }
}

const total = new runningTotal([1, 2, 3, 4, 5, 6]);
console.log(total.run());