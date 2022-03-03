
function lastNitem(t, n) {
	let output = [];// Écrivez votre code ici
	for ( let i=t.length-n; i<t.length; i++) {
	    output.push(t[i]);
	}
	return output;
}
	

// Afficher la sortie
console.log(lastNitem([8, 1, 5, 2, 4, 9], 3));
console.log(lastNitem([1, 2, 3], 1));
console.log(lastNitem([55,55,55,55,5, 9,98, 8, 7, 5, 1, 2, 3, 4], 10));
console.log(lastNitem([1, 2, 3, 4], 0));
