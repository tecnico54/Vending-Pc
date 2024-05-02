var arreglo = [200.000, 250.000, 50.000, 300.000, 120.000, 40.000, 100.000];
var suma = 0;
var arreglo = document.getElementById("arreglo");
	for(var i = 0 ; i < arreglo.length; i++){
    	  	suma += arreglo[i];
    	  }
  	document.write("Total: "." " + suma);