var a=3;
var b=4;

function Mayor(){

console.log('a es: ' + a);
console.log('b es: ' + b);

if (a>b){
	alert('a es mayor que b');
} else	{
	alert('a es igual o menor que b');
}	
}


Mayor();


//Con argumentos

function Otro(x,y){

var x=6;
var y=8;
console.log('x es: ' + x);
console.log('y es: ' + y);

if (x>y){
	alert('x es mayor que y');
} else	{
	alert('x es igual o menor que y');
}	
}

Otro();
