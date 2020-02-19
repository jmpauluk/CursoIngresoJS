function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta= true;

	while (respuesta == true)
	{
		contador++

		numero= prompt("Ingrese un numero?")

		numero= parseInt(numero);

		while (isNaN(numero))
		{
			numero= prompt("Ingrese un numero?")
			
			nuemro= parseInt(numero);	
		}

		if (numero>= 0)
		{
			//positvo += numero
			positivo = positivo + numero;
		}

		else
		{
			//negativo *= numero
			negativo= negativo * numero 
		}

		respuesta = confirm("Desea continuar?")
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN