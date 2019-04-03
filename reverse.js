/*function reverseArray1(colors) {
  console.log(colors.reverse());
}

reverseArray1(["green", "red", "blue", "yellow", "black"])

function reverseArray2(colors) {
  let newArray = [];
  for (let i = colors.length - 1; i >= 0; i--) {
    newArray.push(colors[i]);
  }
  return newArray;
}

console.log(reverseArray2(["green", "red", "blue", "yellow", "black"]));*/


class reverseArray {
  constructor(data) {
    this.array = data;
  }

  run() {
    let newArray = [];
    for (let i = this.array.length - 1; i >= 0; i--) {
      newArray.push(this.array[i]);
    }
    return newArray;
  }
}

const reverseColors = new reverseArray(["green", "red", "blue", "yellow", "black"]);
console.log(reverseColors.run());