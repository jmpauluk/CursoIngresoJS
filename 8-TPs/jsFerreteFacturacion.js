/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

	var precio1;

	var precio2; 

	var precio3;

	var resultado;

	var promedio;

	var IVA;

	var resultadoFinal;




	



function Sumar () 
{

	precio1 = document.getElementById("PrecioUno").value;

	precio2 = document.getElementById("PrecioDos").value;

	precio3 = document.getElementById("PrecioTres").value;

	precio1= parseInt(precio1);

	precio2= parseInt(precio2);

	precio3= parseInt(precio3);	

	resultado = precio1 + precio2 + precio3;

	alert(resultado);

}
function Promedio () 
{
	
	precio1 = document.getElementById("PrecioUno").value;

	precio2 = document.getElementById("PrecioDos").value;

	precio3 = document.getElementById("PrecioTres").value;

	precio1= parseInt(precio1);

	precio2= parseInt(precio2);

	precio3= parseInt(precio3);	

	resultado = precio1 + precio2 + precio3;

	promedio = resultado / 3  ; 

	alert(promedio);	
}
function PrecioFinal () 
{
	precio1 = document.getElementById("PrecioUno").value;

	precio2 = document.getElementById("PrecioDos").value;

	precio3 = document.getElementById("PrecioTres").value;

	precio1= parseInt(precio1);

	precio2= parseInt(precio2);

	precio3= parseInt(precio3);

	IVA = parseInt(IVA);

	resultado = precio1 + precio2 + precio3;

	IVA = resultado * 0.21;

	resultadoFinal = resultado + IVA;

	alert(resultadoFinal);


}