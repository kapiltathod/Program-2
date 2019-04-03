
/*let array = console.log("the quick brown fox".trim().split(" "));
  console.log(array);
  console.log(array.length)
  const empty = []
  /*for (let i = 0; i < array.length; i++) {
    let temp = array[i][0] + array[i][1] + 'ay';
    empty.push(temp)
  }
  console.log(empty);*/

/*function pigLatin(text) {
  const piglatin = [];
  for (let i = 0; i < text.length; i++) {
    let pig = text[i][1] + text[i][0] + 'ay'
    piglatin.push(pig);
  }
  return piglatin
}

console.log(pigLatin(["the", "quick", "brown", "fox"]));*/


class pigLatin {
  constructor(text) {
    this.array = text;
  }

  run() {
    const piglatin = [];
    for (let i = 0; i < this.array.length; i++) {
      let pig = this.array[i][1] + this.array[i][0] + 'ay'
      piglatin.push(pig);
    }
    return piglatin
  }
}

const latin = new pigLatin(["the", "quick", "brown", "fox"]);
console.log(latin.run());