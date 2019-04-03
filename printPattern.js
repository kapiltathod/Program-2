/*function printFrame(x , y) {
  for (let i = 1; i <= x; i++) {
    let pattern = ""
    for (let j = 1; j <= y; j++) {
      if (i==1 || i==x || j==1 || j==y) {
        pattern += "*"
      } else {
        pattern += " "
      }
    }
    console.log(pattern);
  }
}

printFrame(3, 6)*/

class PrintFrame {
  constructor(parameter1, parameter2) {
    this.rows = parameter1;
    this.columns = parameter2;
  }

  run() {
    for (let i = 1; i <= this.rows; i++) {
      let pattern = "";
      for (let j = 1; j <= this.columns; j++) {
        if (i==1 || i==this.rows || j==1 || j==this.columns) {
          pattern += "*"
        } else {
          pattern += " "
        }
      }
      console.log(pattern);
    }
  }
}

const rectangleFrame = new PrintFrame(3, 6);
rectangleFrame.run();


class Frame extends PrintFrame {
  constructor(parameter1, parameter2) {
    super();
    this.rows = parameter1;
    this.columns = parameter2;
  }

  run() {
    console.log("This method overridden by the child class");
  }
}

