
/*Pedir los siguientes datos:
 edad(mayores de 18)
 sexo("f" o "m") y 
 pasaje ("urbano", "nacional" o "internacional");

a) El nombre del hombre con pasaje nacional más joven.

b) El sexo y pasaje del pasajero/a más viejo.

c) La cantidad de mujeres con pasaje urbano o nacional.

d) El promedio de edad entre las mujeres.

e) El promedio de edad entre los hombres con pasaje internacional.*/

function mostrar()
{
	//declaracion de variables//

	var edad;
	var sexo;
	var pasaje;

	//acumuladores y contadores//

	var acumMujeres = 0;
	var contadorMujeres = 0;
	var acumHombresInt = 0;
	var contadorHombresint= 0;
	var contadorMujeresPasUroInt = 0;

	//Maximos y minimos//

	var nombreMin // mostrar nombre de la persona mas joven con pasaje nacional//
	var sexoMin // para mostrar el sexo de la persona mas joven con pasaje nacional//
	var pasajeMin // para mostrar el pasaje de la persona mas joven con pasaje nacional//
	var edadMin ;

	var sexoMax // para mostrar el sexo del pasajero con la edad del valor mas alto//
	var pasajeMax // para guardar el pasaje  de la persona con la edad del valor mas alto//
	var edadMax // contiene la edad con valor mas alto//

	// Banderas // 

	 var primeraVezMax = true; // establecer edad max primer ciclo //
	 var primeraVezMin = true; // establecer edad minima primer ciclo//
	 var respuesta = true ; // validacion hasta el usuario quiera continuar//



	 // Procesamiento de datos //

	 while(respuesta==true) // entra por primera vez porque esta declarada arriba como true
	 {

	 	nombre = prompt("Ingrese su nombre ") // Pido los nombres // 
 	
	 		while(nombre == null || nombre =="") // Valido que no ponga aceptar o cancelar en el prompt//	 														
	 		{
	 			nombre = prompt("Error.. Ingrese su nombre ")
	 		}

	 	edad = prompt("Ingrese su edad, mayor a 18") // Pido edad //
	 	edad = parseInt(edad);  // le aplico parseInt , para que no me lo tome como letras y aplique suma//

	 		while(edad<18 || isNaN(edad)) // valido que no sea menor a 18 y que sea un numero //
	 		{
	 			edad = prompt("Error.. Ingrese su edad, mayor a 18")
	 			edad = parseInt(edad); // lo vuelvo a parsear en el error//
	 		}

	 	sexo = prompt("Ingrese su sexo , f o m") // Pido el sexo //
	 	
	 		while(sexo!="f" && sexo!="m") //valido que su seleccion sea f o m unicamente // 
	 		{
	 			sexo = prompt("Error..Ingrese su sexo , f o m")
	 		}	


	 	pasaje = prompt ("Ingrese su pasaje: urbano, nacional o internacional") // Pido pasajes //

	 		while(pasaje!="urbano" && pasaje!="internacional" && pasaje!="nacional") // valido que solo ingrese las opciones dadas //
	 		{
	 			pasaje = prompt ("Error..Ingrese su pasaje: urbano, nacional o internacional")
	 		}

	 	// Punto A //
	 	
	 	if (primeraVezMin==true)
	 	 {
	 	 	edadMin= edad  // le asigno el primer valor de EdadMin//
	 	 	nombreMin=nombre  // le asigno el primer nombre ingresado//
	 	 	pasajeMin= pasaje // le asigno el primer valor de pasaje//

	 	 	primeraVezMin = false; // cambio la bandera para que no se vuelva ejecutar // 
	 	 }	

	 	 if(edadMin> edad && pasaje=="nacional" && sexo=="m") // si mi primer valor de edad guardado es mayor a edad actual, actualizo mi minimo//
	 	 {
	 	 	nombreMin=nombre; //guardo el nombre de la persona //
	 	 	pasajeMin= pasaje // guardo la seleccion de pasaje , arriba  ya sabemos que es urbano//
	 	 	edadMin= edad;  // guardo la edad mas joven // 
	 	 }	

	 	 // Punto B // 

	 	 if(primeraVezMax == true)
	 	 {
	 	 	edadMax= edad   // le asigo el primer valor de edad a EdadMaxima //
	 	 	pasajeMax = pasaje  // le asigo el primer valor de pasajeMaximo// 
	 	 	sexoMax = sexo // le asigo el primer valor de SexoMax// 

	 	 	primeraVezMax= false;  //cambio la bandera para que no se vuelva a ejecutar//
	 	 }

	 	 if(edadMax<edad) //Si mi primer edad guardada es menor a edad actual, actualizo mis maximos//
	 	 {
	 	 	edadMax = edad // Si hay una nueva edad maxima la guardo // 
	 	 	sexoMax = sexo  // guardo la seleccion de sexo//
	 	 	pasajeMax = pasaje // guardo seleccion de pasaje//
	 	 }

	 	 // Punto C // 

	 	 if(sexo=="f" && (pasaje=="urbano" || pasaje =="internacional"))
	 	 {
	 	 	 contadorMujeresPasUroInt++; //cuento mujeres con pasaje urbano o internacional//
         }


         // Punto D // 

         if(sexo=="f")
         {
         	contadorMujeres++ // cuento las mujeres //
         	acumMujeres += edad // acumulo su edad para hacer el promedio sumandolas//
         }

         //Punto E //

         if(sexo=="m" && pasaje=="internacional")
         {
         	contadorHombresint++ // cuento los hombres //
         	acumHombresInt += edad // acumulo hombres con pasaje internacional y le sumo la edad para hacer el promedio//
         }


	 	respuesta = confirm("Desea continuar? ") // guardo el valor de respuesta siendo true para continuar como el principio / false para que salga del ciclo //
	 }


}
