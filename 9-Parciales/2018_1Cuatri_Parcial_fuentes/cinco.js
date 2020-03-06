/*Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra). */


function mostrar()
{
	var planeta = prompt("Ingrese un planeta del sistema solar");

	switch(planeta)
	{
		case"mercurio":
		case"venus":
		case"la tierra":
			alert("acá vivimos")
		case"marte":
		case"jupiter":
		  alert("Acá hace mas calor");
		  break;
		case"saturno":
		case"urano":
		case"neptuno":
		case"pluton":
		  alert("Acá hace mas frio")
		break;


		default:		
			var planeta = prompt("Error ..Ingrese un planeta del sistema solar");
		
	}


}


