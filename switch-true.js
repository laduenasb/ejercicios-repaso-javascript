// Crear un programa que me permita determinar la estación del año

// Inicializar la variable y asignarle un dato
const mes=13;

// Inicializar el menú con los diferenes casos

switch(true) {
	case mes>=3 && mes<=5:
		console.log("Primavera");
		break;
	case mes>=6 && mes<=8:
		console.log("Verano");
		break;
	case mes>=9 && mes<=11:
		console.log("Otoño");
		break;
	case mes==12 || mes<=2:
		console.log("Invierno");
		break;
	default:
		console.log("Opción no valida, ingresa una opción correcta.")
}