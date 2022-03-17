function letterCount(str){
  let obj = {};
  str.split('').sort().forEach((char) => {
    obj[char] = (obj[char]) ? ++obj[char] : 1;
  });
  return obj;
}
