/*function largest(data) {
  const l = data.length;
  let large = 0;
  if (l < 2) {
    console.log(" Invalid Input ");
    return;
  }
  for (let p = 0; p < l; p++) {
    if(data[p] > large) {
      large = data[p];
    }
  }
  return large;
}

console.log(largest([29,3,90,78,32,10]));

function largest1(data) {
  data.sort();
  console.log("The largest element is:", data[data.length-1]);
}

largest1([29,3,90,78,32,10]);*/


class largestElement {
  constructor (data) {
    this.array = data;
   }

  run () {
    const l = this.array.length;
    let large = 0;
    if (l < 2) {
      console.log(" Invalid Input ");
      return;
    }
    for (let p = 0; p < l; p++) {
      if(this.array[p] > large) {
        large = this.array[p];
      }
    }
    return large;
  }
}

const largest = new largestElement([29,3,90,78,32,10]);
console.log(largest.run());