function landPerimeter(arr) {
  let perimeter = 0;
  
  function scanAdjacent(y,x) {
    let adj = [[y,x+1],[y,x-1],[y+1,x],[y-1,x]];
    for (let coords of adj) {
      if (!arr[coords[0]]
          || !arr[coords[0]][coords[1]]
          || arr[coords[0]][coords[1]] !== 'X') 
      {
        perimeter += 1;
      }
    }
  }
  
  for (let i = 0; i < arr.length; i++) {
    for (let ii = 0; ii < arr[i].length; ii++) {
      if (arr[i][ii] === "X") scanAdjacent(i, ii);
    }
  }
  
  return "Total land perimeter: " + perimeter;
}
