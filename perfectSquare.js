/*function perfectSquare(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i*i);
  }
}

console.log(perfectSquare(20));*/

class perfectSquare {
  constructor(input) {
    this.number = input;
  }

  run() {
    for (let i = 1; i <= this.number; i++) {
      console.log(i*i);
    }
  }
}

const ps = new perfectSquare(20);
ps.run();