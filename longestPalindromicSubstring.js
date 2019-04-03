function longestPalindromeSubstring(data) {
  let output = [];
  let maxLength = 1;
  let start = 0;
  let len = data.length;
  let low, high;
  for (let i = 1; i < len; ++i) {
    low = i - 1;
    high = i;
      while (low >= 0 && high < len && data[low] == data[high]) {
        if (high - low + 1 > maxLength) {
          start = low;
          maxLength = high - low + 1;
        }
        --low;
        ++high;
      }
      low = i - 1;
      high = i + 1;
      while (low >= 0 && high < len && data[low] == data[high]) {
        if (high - low + 1 > maxLength) {
          start = low;
          maxLength = high - low + 1;
        }
        --low;
        ++high;
      }
  }
  function printSubStr(data, low, high) {
    for( let i = low; i <= high; ++i ){
      output.push(data[i]);
    }
    console.log(output);
  }
  printSubStr(data, start, start + maxLength - 1);
  return maxLength;
}

let result = longestPalindromeSubstring("palinnilkni");
console.log(result);


