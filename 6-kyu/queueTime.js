function queueTime(cx, n) {
  const q = Array(n).fill(0);
  cx.forEach(c => {
    q[q.indexOf(Math.min(...q))] += c;
  });
  return Math.max(...q);
}
