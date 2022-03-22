function beggars(values, n){
  const q = Array(n).fill(0);
  let i = 0;
  while (i < values.length && n > 0) {
    for(let qi = 0; i < values.length && qi < n; i++, qi++){
      q[qi] += values[i];
    }
  }
  return q;
}
