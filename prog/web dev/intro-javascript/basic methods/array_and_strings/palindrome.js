
function checkPalindrome(n) {
	// Écrivez votre code ici
	let str = toString(n);
	let answer=false;
	for (let i=0; i<((str.length-1)/2); i++) {
	    if (str[i] == str[str.length-1-i]) answer=true;
	}
	return answer;
}

// Afficher la sortie
console.log(checkPalindrome(212));
console.log(checkPalindrome(123));
console.log(checkPalindrome(75257));


/*
solution

function checkPalindrome(n) {
  return String(n).split('').reverse().join('') == String(n);
}

*/