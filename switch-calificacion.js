// Crear un programa que me determine la calificación del estudiante

const nota=1.5;

switch(true){
	case nota>=0 && nota<=2.95:
		console.log("Perdió la materia");
		break;
	case nota>2.95 && nota<=5:
		console.log("Paso la materia, felicitaciones!!");
		break;
	default:
		console.log("Nota incorrecta");
}

