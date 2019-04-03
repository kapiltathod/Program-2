const input1 = "qdfgg";
const input2 = "dgujl";

function longestCommonSubsequence(input1, input2, input1length, input2length) {
  let length1 = input1.length;
  let length2 = input2.length;
  if (input1[length1 - 1] == input2[length2 - 1]) {
    return longestCommonSubsequence(input1, input2, length1 - 1, length2 - 1 ) + 1
  } else {
    return Math.max(longestCommonSubsequence(input1, input2, length1, length2 - 1), longestCommonSubsequence(input1, input2, length1 - 1, length2))
  }
}

let resultant = longestCommonSubsequence(input1, input2, input1.length, input2.length);
console.log(resultant);