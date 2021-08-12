const binaryArrayToNumber = arr => {
  // your code
  let value = 0;
  let bin = 1;
  
  for (let i = arr.length -1; i >= 0; i--) {
    if (arr[i] === 1) {
      value += bin;
    }
    bin *= 2;
  }
  
  return value;
};
