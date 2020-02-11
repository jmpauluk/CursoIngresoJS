function mostrar()
{
//tomo la edad  

	var edad;

	var estado;

	edad = document.getElementById("edad").value ; 

	estado = document.getElementById("estadoCivil").value;

	if (edad<18 && estado !=="Soltero") // Comparación  edad menor a 18 y estadocivil Distinto de "Soltero"//

	{


	}


	else {

		if (edad>=18) // Como arriba la comparacion es "distinto de soltero" , en el else es "igual" a "soltero"//
 
		{

			alert("es soltero y no es menor ");
		};
	}



	


}//FIN DE LA FUNCIÓN