function decompose(n, arr, remain) {
  remain = remain || n*n;
  let i = (arr) ? Math.min(Math.floor(n), arr[0]-1) : n-1;
  arr = arr || [];
  
  if (remain === 0) return arr;
  
  for (i; i > 0; i--) {
    let newArr = decompose(Math.sqrt(remain - (i*i)), [i, ...arr], remain - i*i)
    if (newArr) {
      return newArr;
    }
  }  
  
  return null;
}
