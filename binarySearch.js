/*const data = [1, 2, 3, 4, 5, 6];

function binarySearch(data, numberToBeFind, start, end) {

}

result = binarySearch(data, 7, 0, data.length)

console.log(result);*/


class binarySearch {
  constructor(data, numberToBeFind, start, end) {
    this.data = data;
    this.numberToBeFind = numberToBeFind;
    this.start = start;
    this.end = end;
  }

    binarySearchone(data, numberToBeFind, start, end){
    if (start > end) {
    return false;
    }
    let mid = Math.floor((start + end) / 2);
    if (data[mid] === numberToBeFind) {
      return "Element is found";
    } if(data[mid] > numberToBeFind) {
      return binarySearchone(data, numberToBeFind, start, mid - 1);
    } else {
    return binarySearchone(data, numberToBeFind, mid + 1, end);
    }
}
  // run() {
  //   if (this.firstIndex > this.secondIndex) {
  //   return false;
  //   }
  //   let mid=Math.floor((this.firstIndex + this.secondIndex) / 2);
  //   if (this.array[mid] === this.number) {
  //     return "Element is found";
  //   } if(this.array[mid] > this.number) {

  //     mid = mid - 1;
  //     this.run()
  //       //return binarySearch(this.array, this.number, this.firstIndex, mid - 1);
  //     } else {
  //       //return binarySearch(this.array, this.number, mid + 1, this.secondIndex);

  //     }
  // }
}

const result = new binarySearch([1, 2, 3, 4, 5, 6], 7, 0, 6);
console.log(result.binarySearchone([1, 2, 3, 4, 5, 6], 7, 0, 6));