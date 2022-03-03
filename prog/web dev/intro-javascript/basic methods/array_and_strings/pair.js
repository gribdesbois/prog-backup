function nbrPaire(n) {
  let paire = [];
  
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      paire.push(i);
    }
  }
  
  return paire;
}
