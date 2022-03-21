function travel(r, zipcode) {
  const addresses = [];
  const numbers = [];
  
  if (zipcode.length === 8) {
    const list = r.split(',').filter(a => a.includes(zipcode));

    list.forEach(add => {
      addresses.push(add.split(zipcode)[0].trim().split(' ').splice(1).join(' '));
      numbers.push(add.split(' ')[0]);
    });
  }
  return `${zipcode}:${addresses.join(',')}/${numbers.join(',')}`
}
