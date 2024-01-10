const categoriaProducto="relojes";

switch(categoriaProducto){
	case "ropa":
		console.log("La sección es vestuario");
		break;
	case "electronica":
		console.log("La sección es tecnologica");
		break;
	case "alimentación":
		console.log("La sección es comidas");
		break;
	default:
		console.log("Lo que ingresaste no pertenece a una sección del supermercado");
}