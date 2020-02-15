/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 

{
	var precio = 35;

	var total ;

 	var cantidadLamparas;

 	var descuento;

  var precioFinal;

 	var marca = document.getElementById("Marca").value;

 	cantidadLamparas = document.getElementById('Cantidad').value;



 	if (cantidadLamparas>=6 ) 
 	{

 		total= cantidadLamparas * precio 

 		descuento = total * 0.50  

    precioFinal= total-descuento;

 		document.getElementById("precioDescuento").value = precioFinal ;  

 	}


 	if (cantidadLamparas==5 && marca=="ArgentinaLuz")

 	 {	
       total = cantidadLamparas * precio ;

       descuento = total * 0.40 ;

       precioFinal= total-descuento;

       document.getElementById("precioDescuento").value = precioFinal;

     } 


     else 
    {
     	if (cantidadLamparas==5)

     	{
     		total = cantidadLamparas * precio ;

       		descuento = total * 0.30 ;

          precioFinal= total-descuento;

       		document.getElementById("precioDescuento").value = precioFinal;

     	}
     }


     if ( cantidadLamparas == 4 && marca=="ArgentinaLuz" || marca=="“FelipeLamparas”")
     {
     	total = cantidadLamparas * precio ;

     	descuento = total * 0.25 ;

      precioFinal= total-descuento;

     	document.getElementById("precioDescuento").value = precioFinal;
     }

     else {
     	  	if (cantidadLamparas==4)

     	  	{
     	  	   total = cantidadLamparas * precio ;

     	  	   descuento = total * 0.20 ;

             precioFinal= total-descuento;

     	  	   document.getElementById("precioDescuento").value = precioFinal;
     	  	}

    	  }


    if (cantidadLamparas==3 && marca=="“FelipeLamparas”")
    {
    	total = cantidadLamparas * precio ;

     	descuento = total * 0.10 ;

     	document.getElementById("precioDescuento").value=descuento;

    }	  	  

    

   	if (cantidadLamparas ==3 && marca=="ArgentinaLuz")

   	{
   		total = cantidadLamparas * precio ;

     	descuento = total * 0.15 ;

      precioFinal= total-descuento;

     	document.getElementById("precioDescuento").value = precioFinal;

   	}	  	

   
   		if (cantidadLamparas==3 && marca=="FelipeLamparas") 

   		{	

   		total = cantidadLamparas * precio ;

     	descuento = total * 0.10 ;

      precioFinal= total-descuento;

     	document.getElementById("precioDescuento").value =  precioFinal;

   		}

   		else
   		{
   			if (cantidadLamparas==3) 
   			{
   				total = cantidadLamparas * precio ;

     			descuento = total * 0.05 ;

          precioFinal= total-descuento;

     			document.getElementById("precioDescuento").value = precioFinal;
   			}
   		}


      if (precioFinal > 120)

        {
            descuento= precioFinal * 0.10

            alert("usted pago " + precioFinal + " siendo " + descuento + " el impuesto que se pago");
        }


   	

   	


} 
