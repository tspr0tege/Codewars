function highAndLow(numbers){
  var arr = numbers.split(' ');  
  return `${Math.max(...arr)} ${Math.min(...arr)}`
}
