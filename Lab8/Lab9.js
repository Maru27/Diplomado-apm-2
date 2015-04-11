// Creación del Callback sumar dos numeros

var a=3;
var b=4;

	console.log('a es: ' + a);
    console.log('b es: ' + b);

function operaciones(suma,resta){
	suma();
	resta();	
}

// Operaciones
operaciones(

function(){
  var suma;
  suma=a+b;
  alert('La suma es: ' + suma);
},

function(){
  var resta;
  resta=a-b;
  alert('La resta es: ' + resta);
}

);

