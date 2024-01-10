const codigopais="USA";
const codigop=prompt("Ingrese el codigo de pais: ");
function idiomapais(codigopais){
	switch(codigopais){
		case "USA":
			console.log("El idioma oficial es ingles.");
			break;
		case "ESP":
			console.log("El idioma oficial es español");
			break;
		case "FRA":
			console.log("El idioma oficial es frances");
			break;
		default:
			console.log("No se encuentra el idioma");
	}
}

idiomapais(codigop);