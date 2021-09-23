function tickets(peopleInLine){
  let changeDrawer = [];
  // if first one isn't 25, then NO
  if (peopleInLine[0] > 25) return 'NO'
  // Make change by subtracting the highest bills first, if possible.
  for (let i = 0; i < peopleInLine.length; i++) {    
    changeDrawer[peopleInLine[i]] = (changeDrawer[peopleInLine[i]]) ? changeDrawer[peopleInLine[i]] + 1 : 1;
    let change = peopleInLine[i] - 25;
    if (change >= 50 && changeDrawer[50] > 0) {
      changeDrawer[50]--;
      change -= 50;
    }
    if (change >= 25) {
      change /= 25;
      changeDrawer[25] -= change;
      if (changeDrawer[25] < 0) return 'NO'
    }
  }
  return 'YES'
}
