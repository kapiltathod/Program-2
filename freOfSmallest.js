/*function frequencyOfSmallest(array) {
  let minEle = array[0];
  const n = array.length;
  let freq = 1;
  for (let i = 1; i < n; i++) {
    if (array[i] < minEle) {
      minEle = array[i];
      freq = 1;
    } else if (minEle === array[i]) {
      freq++;
    }
  }
  return freq;
}

console.log(frequencyOfSmallest([2, 3, 4, 67, 8, 3, 2, 2, 9]));

function frequencyOfSmallest1(array) {
  array.sort();
  let frequency = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[1] === array[i]) {
      frequency++;
    }
  }
  return frequency;
}

console.log(frequencyOfSmallest1([2,3,4,67,2,2,2,9]));*/


class frequencyOfSmallest {
  constructor(data) {
    this.array = data;
  }

  run () {
    this.array.sort();
    let frequency = 0;
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[1] === this.array[i]) {
        frequency++;
      }
    }
    return frequency;
  }
}

const smallestFrequency = new frequencyOfSmallest([2,3,4,67,2,2,2,9]);
console.log(smallestFrequency.run());