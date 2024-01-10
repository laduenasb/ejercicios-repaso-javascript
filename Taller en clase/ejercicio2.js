const mes=13;

const dias=[31,29,30,31,30,31,30,31,30,31,30,31];
const meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
switch(true){
	case mes>= 1 && mes<=12:
		console.log("El mes ",meses[mes-1],"tiene", dias[mes-1], " dias");
		break;
	default:
		console.log("El mes ingresado no es válido");
}