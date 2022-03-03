
function concatener(tab1, tab2) {
	// Écrivez votre code ici
	result = [];let tmp=0;
	for (let i=0; i<tab1.size; i++) {
	    result[i]=tab1[i];
	    tmp=i;
	}
	for (let i=0; i<tab2.size; i++) {
	    result[tmp]=tab1[i];
	    tmp++;
	}
	console.log(result);
}

