function solve(s) {
  const vowels = "aeiou";
  let highest = 0;
  let value = 0;
  for (let i = 0; i < s.length; i++) {
    if (!vowels.includes(s[i])) {
      value += s.charCodeAt(i) - 96;
      if (value > highest) highest = value;
    } else {
      value = 0;
    }
  }
  return highest;
};
