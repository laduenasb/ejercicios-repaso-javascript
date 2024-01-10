// Crear un programa que me permita redondear la nota final de un estudiante

const nota=5.5;

// Redondear la nota a un solo digita

const notaRedondeada = nota.toFixed(0);

console.log("La nota redondeada es: ", notaRedondeada);

switch(true) {
	case notaRedondeada>=0 && notaRedondeada<=2:
		console.log("Perdiste la materia, repitela el otro semestre");
		break;
	case notaRedondeada>=3 && notaRedondeada <=5:
		console.log("Pasaste la materia, felicitaciones !!!");
		break;
	default:
		console.log("Ingrese una nota válida al programa");
}