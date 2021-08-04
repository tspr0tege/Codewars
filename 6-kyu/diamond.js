function diamond(n){
  if (n % 2 === 0 || n < 1) {
    return null;
  }
  
  let diam = '';
  let count = 2;
  
  for (let i = 1; i > 0; i += count) {
    for (let space = 0; space < (Math.ceil(n/2) - Math.ceil(i/2)); space++) {
      diam += ' ';
    }
    for (let stars = 0; stars < i; stars++) {
      diam += '*';
    }
    diam += '\n';
    if (i >= n) { count = -2; }
  }
  
  return diam;
}
