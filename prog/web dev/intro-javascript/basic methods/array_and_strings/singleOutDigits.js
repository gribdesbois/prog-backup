
  var str = "242Welcome23 45to344 254324WayToLearnX!";
  var patt = /\D */g;//écrivez ici, l'expression régulière ;
  var result = str.match(patt);
  
  console.log(result.join(""));
