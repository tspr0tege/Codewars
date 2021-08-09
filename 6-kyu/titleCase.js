function titleCase(title, minorWords) {
  var lower = (minorWords) ? minorWords.toLowerCase().split(' ') : [];
  var titleWords = title.toLowerCase().split(' ');  
  
  if (title === '') { return title; }
  
  let str = titleWords.map((word, index) => {
    if (lower.includes(word) && index !== 0) { 
      return word;
    } else {
      return word[0].toUpperCase() + word.substring(1);
    }
  });
  
  return str.join(' ');
}
