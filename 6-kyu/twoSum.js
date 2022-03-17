function twoSum(numbers, target) {
  for(let i = 0; i < numbers.length; i++) {
    for(let ii = i + 1; ii < numbers.length; ii++) {
      if (numbers[i] + numbers[ii] === target) return [i, ii];
    }
  }
}
