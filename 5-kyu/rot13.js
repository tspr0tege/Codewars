function rot13(message){
  //your code here
  let abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const up13 = (n) => {
    return (n+13 > 25) ? n-13 : n+13;
  }
  
  return message.split('').map((char) => {
    if (abc.includes(char)) {
    // handle lower
      return abc[up13(abc.indexOf(char))];
    } else if (abc.includes(char.toLowerCase())) {
    // handle caps
      return abc[up13(abc.indexOf(char.toLowerCase()))].toUpperCase();
    } else {
    // handle others
     return char;      
    }
  }).join('');
}
