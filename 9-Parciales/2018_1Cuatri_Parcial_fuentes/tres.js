
/*Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.*/


function mostrar()
{
	//Declaracion de variables //

	var precio ;

	var porcentaje ; 

	var precioFinal;

	var descuento;

	// Proceso obtencion de  datos //

	precio = prompt("Ingrese el precio");

	porcentaje = prompt("Ingrese el descuento");

	// Calculos //

	descuento = precio * porcentaje / 100

	precioFinal = precio - descuento;

	//mostrar mediante ID//

	document.getElementById("elPrecioFinal").value  = precioFinal;







}
