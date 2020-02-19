function mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var minimo;
	var primeraVez = true;
	// declarar variables
	
	var respuesta= true;

	while(respuesta== true)
	{
		contador = contador + 1
		
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero)

		while(isNaN(numero))

		{
			numero = prompt("Error. Ingrese un numero");
			numero = parseInt(numero)
		}

		if(primeraVez){
			primeraVez= false;

			maximo= numero
			minimo= numero
		}

		else{
			if(numero>maximo)
			{
				maximo=numero;
			}

			if(numero< minimo)
			{
				minimo = numero;
			}
		}



		respuesta = confirm("Desea continuar?")

	
	


		}

		document.getElementById("maximo").value = maximo;
		document.getElementById("minimo").value = minimo;
		


}//FIN DE LA FUNCIÓN