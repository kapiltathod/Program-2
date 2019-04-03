/*function rotateArray(arr) {
  const temp = arr[0];
  const length = arr.length

  for (let i = 0; i < length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr[length - 1] = temp;
  return arr
}

function kTimesRotation(arr, k) {
  console.log(arr)
  for (let j = 0; j < k; j++) {
    console.log(rotateArray(arr));
  }
}

kTimesRotation([1, 2, 3, 4, 5, 6, 7], 2);*/


class rotateArray {
  constructor(data, input) {
    this.array = data;
    this.number = input;
  }

  run1() {
    const temp = this.array[0];
    for (let i = 0; i < this.array.length - 1; i++) {
      this.array[i] = this.array[i + 1];
    }

    this.array[this.array.length - 1] = temp;
    return this.array;
  }

  get run2() {
    for (let j = 0; j < this.number; j++) {
      return this.run1();
    }
  }
}

const rotation = new rotateArray([1, 2, 3, 4, 5, 6, 7], 2);
console.log(rotation.run2);