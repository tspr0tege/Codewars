function openOrSenior(data){
  return data.map(([age,hc]) => (age >= 55 && hc > 7) ? "Senior" : "Open");
}
