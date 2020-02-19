function mostrar()
{

	var contador=0;
	var acumulador=0;
	var iteraciones;
	var respuesta = true;


	/*iteraciones = prompt("Cuantos numeros desea ingresar?")

	while (isNaN(iteraciones))
	{
		iteraciones = prompt("Cuantos numeros desea ingresar?")
		iteraciones = parseInt(iteraciones);
	}*/

	//while (confirm("Desea continuar?"))//


	while (respuesta == true)
	{
		contador++;

		var numero = prompt ("Ingrese un numero")

		numero = parseInt(numero);

			while (isNaN(numero))
			{
				numero = prompt ("Error Ingrese un numero")

				numero = parseInt(numero);
			}

			acumulador += numero;

		 respuesta = confirm("Desea continuar?")
		  
	}
				

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN