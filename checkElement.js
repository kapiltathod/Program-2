/*function checkElement (num, x) {
  if (num.includes(x)) {
    console.log("Element is present");
  } else {
    console.log("Element is not present");
  }
}

checkElement([1, 2, 3, 4, 5, 6], 11);

function checkElement1 (array, x) {
  outer: {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == x) {
      console.log("Element is present")
      break outer;
    }
  }
  console.log("Element is not present");
  }
}

checkElement1([1, 2, 3, 4, 5, 6], 2);*/


class checkElement {
  constructor(text, data) {
    this.array = text;
    this.number = data;
  }

  run() {
    outer: {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] == this.array.number) {
        return ("Element is present")
        break outer;
      }
    }
    return ("Element is not present");
    }
  }
}

const check = new checkElement([1, 2, 3, 4, 5, 6], 11);
console.log(check.run());
