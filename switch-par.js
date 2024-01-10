// Crear un programa que verifique si un número es par o impar

// Inicializar la variable y le asignaremos un dato
const numero=4;

switch(numero%2) {
	case 0:
		console.log(`${numero} es par`);
		break;
	case 1:
		console.log(`${numero} es impar`);
		break;
	default:
		console.log("El dato ingresado no es válido");
}