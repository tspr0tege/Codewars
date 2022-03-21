function persistence(num) {
  let x = num.toString().split('');
  let y = 0;
  while (x.length > 1) {
    x = x.reduce((a, b) => a * b).toString().split('');
    y++
  }
  return y;
}
