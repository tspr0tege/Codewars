function spiralize (n) {
  let spiral = Array(n-1).fill().map(() => new Array(n).fill(0));
  spiral.unshift(Array(n).fill(1));
  
  let run = n-1;
  let change = [1,0];
  let pos = [0,n-1];
  let dir = 1;
  let i = 0;
  
  do {
    if (!!i && i % 2 === 0) run -= 2;
    
    for (let x = 1; x <= run; x++) {
      pos[0] += (change[0] * dir);
      pos[1] += (change[1] * dir);
      let [y,x] = pos;      
      spiral[y][x] = 1;      
    }
    change.reverse();
    if (++i % 2 > 0) dir *= -1;    
    
  } while (run > 1);
    
	return spiral;
}
