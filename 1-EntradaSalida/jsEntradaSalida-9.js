/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo ;

	var porcentaje ; 


	sueldo = document.getElementById("sueldo").value; 

	sueldo = parseInt (sueldo);


	porcentaje = sueldo * 0.10 ;

	sueldo = sueldo + porcentaje ; 

	document.getElementById("resultado").value= sueldo ;
	
	
}
