function concatArrays1(arr1, arr2) {
  const resultant = arr1.concat(arr2);
  console.log(resultant);
}

concatArrays1(["a", "b", "c"], [1, 2, 3]);

function concatArrays2(arr1, arr2) {
  for (let i=0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  return arr1;function concatArrays1(arr1, arr2) {
  const resultant = arr1.concat(arr2);
  console.log(resultant);
}

concatArrays1(["a", "b", "c"], [1, 2, 3]);

function concatArrays2(arr1, arr2) {
  for (let i=0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  return arr1;
}

const result = concatArrays2(["a", "b", "c"], [1, 2, 3])
console.log(result);




class ConcatArray {
  constructor(arr1, arr2) {
    this.firstArray = arr1
    this.secondArray = arr2
  }

  run() {
    const tempArray = []

    for (let i=0; i < this.firstArray.length; i++) {
      tempArray.push(this.firstArray[i]);
    }

    for (let i=0; i < this.secondArray.length; i++) {
      tempArray.push(this.secondArray[i]);
    }

    return tempArray;
  }
}


const ca = new ConcatArray([1, 2], ["a", "b"])

console.log(ca.run())
console.log(ca.firstArray)
console.log(ca.secondArray)
}

