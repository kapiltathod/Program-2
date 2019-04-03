/*function splitTheDigits(number) {
  const output = [];
  let sNumber = number.toString();
  let len = sNumber.length;
  for (let i = 0; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
}
console.log(output);
}

splitTheDigits(2342);*/


class BaseClass {
  run() {
    throw new Error('Run method not implemented in child');
}

const split = new BaseClass(2342);
//console.log(split.run());

class ChildClass extends BaseClass {
  constructor(input) {
    super();
    this.number = input;
  }

  run() {
    const output = [];
    let sNumber = this.number.toString();
    let length = sNumber.length;
    for (let i = 0; i < length; i += 1) {
      output.push(+sNumber.charAt(i));
    }
    return output;
  }
}

const result = new ChildClass(45632);
console.log(result.run());