function comp(a, b){
  if (!a || !b || a.length !== b.length) return false;
  
  let mult = b.slice();
  
  for (let x of a) {    
    if(!mult.includes(x*x)) return false;
    else mult.splice(mult.indexOf(x*x), 1);
  }
    
  return true;
}
