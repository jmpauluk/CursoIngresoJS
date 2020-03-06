/*Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".*/

function mostrar()
{
	// declaro variables //

	var numeroUno;

	var numeroDos;

	var resultado;

	// Pido los numeros y lo guardo en las variables //

	numeroUno = prompt("Ingrese numero 1");

	numeroDos = prompt("Ingrese numero 2");

	// Comparaciones //}

	if (numeroUno == numeroDos )

	{
		resultado = numeroUno + numeroDos;
		alert(resultado);
	}

	if (numeroUno> numeroDos)
	{
		resultado = numeroUno - numeroDos;
		alert(resultado);
	}

	else 
	{
		numeroUno = parseInt(numeroUno);
		numeroDos = parseInt(numeroDos);

		resultado = numeroUno + numeroDos;		

		alert(resultado);
	}

	if (resultado > 10 )
	{
		alert("La suma es " + resultado + " y supero el 10");
	}

}
