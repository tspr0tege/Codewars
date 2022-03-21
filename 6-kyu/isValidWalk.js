function isValidWalk(walk) {
  function long(t, d) {
    if (d === 'n') return ++t;
    if (d === 's') return --t;
    return t
  }
  
  function latt(t, d) {
    if (d === 'e') return ++t;
    if (d === 'w') return --t;
    return t
  }
  
  return walk.length === 10 && walk.reduce(long, 0) === 0 && walk.reduce(latt, 0) === 0;
}
