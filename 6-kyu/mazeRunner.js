function mazeRunner(maze, directions) {
  
  function searchForStart() {  
    for (let i = 0; i < maze.length; i++) {
      for (let ii = 0; ii < maze[i].length; ii++) {
        if (maze[i][ii] === 2) return [i, ii]
      }
    }
  }
  
  function checkBounds() { 
    return (maze[pos[0]] === undefined || maze[pos[0]][pos[1]] === undefined)
  }
  
  let pos = searchForStart();  
  
  for (let dir of directions)  {
    switch(dir) {
        case "N":
          pos[0] -= 1;
          break;
        case "E":
          pos[1] += 1;
          break;
        case "S":
          pos[0] += 1;
          break;
        case "W":
          pos[1] -= 1;
          break;
    }
    if (checkBounds() || maze[pos[0]][pos[1]] === 1) return "Dead";
    if (maze[pos[0]][pos[1]] === 3) return "Finish";
  }
  
  return "Lost";
}
