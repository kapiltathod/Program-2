/*function selectionSort(array) {
  let i, j, min_idx;
  let n = array.length;
  for (i = 0; i < n; i++) {
    min_idx = i;
    for (j = i+1; j < n; j++) {
      if (array[j] < array[min_idx]) {
        min_idx = j;
      }
    }
    let temp = array[min_idx];
    array[min_idx] = array[i];
    array[i] = temp;
    console.log(array[i]);
  }
}

selectionSort([1,4,12,2,6]);*/


class selectionSort {
  constructor(data) {
    this.array = data;
  }

  run() {
    let inputArray = [];
    inputArray.push(this.array);
    let i, j, minIndex;
    for (i = 0; i < inputArray.length; i++) {
      minIndex = i;
      for (j = i + 1; j < inputArray.length; j++) {
        if (inputArray[j] < inputArray[minIndex]) {
        minIndex = j;
        }
      }
      let temp = inputArray[minIndex];
      inputArray[minIndex] = inputArray[i];
      inputArray[i] = temp;
      return inputArray[i];
    }
  }
}

const sort = new selectionSort([2,4,12,8,6]);
console.log(sort.run());