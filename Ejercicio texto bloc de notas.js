
	
var edad;

var sexo; 

var pasaje; 

var respuesta= true; 

var contadorVueltas= 0;

var acumSexM = 0;

var acumSexF = 0;

var acumInternacional = 0;

var acumI=0;

var acumInternacional = 0
 




		while (respuesta == true)

       {
      		 contadorVueltas= contadorVueltas + 1 ; 

	   		 edad =  prompt ("Ingrese su edad");

	   		 edad = parseInt (edad);

	    		while (isNaN(edad) || edad< 18 ) 

	    		{
					edad = prompt ("Error, ingrese un numero -- Ingrese su edad");

	    			edad = parseInt (edad);
	    		    			

	    		} 

	    		acumEdad= acumEdad + 1 


	      	 	sexo =  prompt ("Ingrese su edad");

	    
	        	while (sexo !== "f" || "m" ) 

	    	{
	    		sexo =  prompt (" Error.. Ingrese su sexo con letra f, si es femenino o m si es masculino");


	    		if (sexo == "m" ) 
	    		{
	    			acumSexM = acumSexM + 1;

	    		}

	    		else

	    		{
	    			acumSexF= acumSexF + 1; 
	    		}


	    		 pasaje = prompt ("Ingrese su pasaje : (urbano, nacional o internacional)");

	    		 while (pasaje !== "urbano" || "nacional" || "internacional")
	    		 {
	    		 	pasaje = prompt("Error.. Ingrese su pasaje : (urbano, nacional o internacional ")

	    		 	if (pasaje == "internacional")
	    		 	{
	    		 		
	    		 	}
	    		 }


	   		 		

	    			

	}
      
