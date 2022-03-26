function count (string) {  
  let obj = {};
  for (let c of string.split('')) {
    obj[c] = (obj[c]) ? obj[c] + 1 : 1;
  }
  return obj;
}
