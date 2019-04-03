/*function mergeArrays(arr1, arr2) {
  const l = arr1.length;
  const m = arr2.length;
  const arr3 = [];
  let x = 0, y = 0, z = 0;
  while (x < l && y < m) {
    if(arr1[x] < arr2[y]) {
      arr3[z++] = arr1[x++];
    } else {
      arr3[z++] = arr2[y++];
    }
  }
  while (x < l) {
    arr3[z++] = arr1[x++];
  }
  while (y < m) {
    arr3[z++] = arr2[y++];
  }
  return log(arr3);
}

mergeArrays([6,8,9], [1,2,3]);*/

class BaseClass {
  run() {
    throw new Error('Run method not implemented in child');
  }
}

const merge = new BaseClass([6,8,9], [1,2,3]);
//console.log(merge.run());

class ChildClass extends BaseClass {
  constructor(input1, input2, input3) {
    super();
    this.firstArray = input1;
    this.secondArray = input2;
    this.thirdArray = input3;
  }

  run() {
    const resultantArray = [];
    let x = 0, y = 0, z = 0;
    while (x < this.firstArray.length && y < this.secondArray.length) {
      if(this.firstArray[x] < this.secondArray[y]) {
      resultantArray[z++] = this.firstArray[x++];
      } else {
      resultantArray[z++] = this.secondArray[y++];
      }
    }
    while (x < this.firstArray.length) {
    resultantArray[z++] = this.firstArray[x++];
    }
    while (y < this.secondArray.length) {
    resultantArray[z++] = this.secondArray[y++];
    }
    return resultantArray;

  }
}


const result = new ChildClass([3,5,4], [1,0,7], [5,6,7]);
console.log(result.run());
console.log(result.run2());