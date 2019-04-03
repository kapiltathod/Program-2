/*function oddPlaces(arr) {
  let odd = 1;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 1) {
      odd = arr[i];
      console.log(arr[i]);
    }
  }
}

oddPlaces([2, 4, 5, 78, 87, 23]);*/


class printOddPlaces {
  constructor(input) {
    this.array = input;
  }

  run() {
    const resultant = [];
    let odd = 1;
    for (let i = 0; i < this.array.length; i++) {
      if (i % 2 == 1) {
        odd = this.array[i];
        resultant.push(odd);
        return resultant;
      }
    }
  }
}

const oddPlaces = new printOddPlaces([2, 4, 5, 78, 87, 23]);
console.log(oddPlaces.run());

class oddPosition extends printOddPlaces {
  constructor(input) {
    super();
    this.array = input;
  }
}

const resutlant = new oddPosition([1,2,3,4,5,6]);
//console.log(oddPlaces.run());