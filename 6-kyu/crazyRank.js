function rank(st, we, n) {
  if(!st) return "No participants"
  
  const names = st.split(',');
  if(n > names.length) return "Not enough participants"
  
  function calcName(i) {
    let base = names[i].split('').reduce((total, c) => total + (c.toUpperCase().charCodeAt(0) - 64), 0);
    return (base + names[i].length) * we[i];
  }
  
  const data = names.map((name, i) => {
    return {name, value: calcName(i)};
  });
  
  data.sort((a, b) => {
    const name1 = a.name.toLowerCase();
    const name2 = b.name.toLowerCase();
    if (name1 > name2) return 1;
    if (name1 < name2) return -1;
    if (name1 === name2) return 0;
  }).sort((a,b) => b.value - a.value);
  
   return data[n-1].name;
}
