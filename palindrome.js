/*function checkPalindrome(data) {
  let start = 0;
  let end = data.length-1;
  while (end > start){
    if (data[start ++] !== data[end --]) {
      console.log("String is not a Palindrome");
      return;
    }
  }
  console.log("String is a Palindrome");
}

checkPalindrome("gammastack");*/


class Base {
  run() {
    throw new Error('Run method not implemented in child');
  }
}

const palindromeCheck = new Base("gammastack");
console.log(palindromeCheck.run());

class Child extends Base {
  constructor(data) {
    this.string = data;
  }

  run() {
    let start = 0;
    let end = this.string.length-1;
    while (end > start){
      if (this.string[start ++] !== this.string[end --]) {
      return ("String is not a Palindrome");
      }
    }
    return ("String is a Palindrome");
  }

}

