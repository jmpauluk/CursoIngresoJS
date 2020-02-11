function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var nota;

	nota = parseInt(Math.random()*11)

	if (nota>8 && nota<=10)
	{
		
		alert("Excelente, tu nota es " + nota)
	}

	else { 
			if (nota>=4) 
			{
				alert("Aprobo, tu nota es " + nota);

			}

			 else {

				alert("Vamos, la proxima se puede . Tu nota es " + nota );

		 		 }
		  }


	}//FIN DE LA FUNCIÓN