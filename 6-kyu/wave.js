function wave(str){
  return str.split('').reduce((acc, char, i) => {
    if (char === ' ') return acc;
    return [...acc, str.substring(0,i).concat(char.toUpperCase(), str.substring(i+1))];
  },[]);
}
